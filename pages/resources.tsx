import Navbar from "@components/Navbar/Navbar"
import Head from 'next/head';
import SmallCard from "@components/Cards/smallCard"
import { GraphQLClient  } from 'graphql-request'
import {ALLRESOURCES} from '@api/quries.ts'
import resourceCatMap  from '@utils/resourceCategoryMapper'
import resourceSorter  from '@utils/resourceSorter'

const ResourcesPage = ({resources}:any)=>{
  const resourceCategory = [...resourceCatMap(resources)]
    return (
        <div className="text-gray-100 bg-primary">
           <Head>
           <meta property="og:url" content="https://pateltapan.com/resources" />
      <meta property="og:type" content="web" />
      <meta property="og:title" content="Tapan Patel Portfolio" />
      <meta property="og:image" content="/og.png" />
      <link rel="icon" href="/fevicon.ico" />
      <title> Resume | Tapan Patel</title>
          </Head>
          <Navbar />
          <div className="container mx-auto px-3 sm:px-10 md:px-10 lg:px-20 xl:px-40 py-6">
          {
            resourceCategory.map((cat,idx)=>{
              return (
                <div className="mb-12"  id={`${idx}`}>
                  <h2 className="text-xl text-gray-100 "> {cat.split("_").join(" ")} </h2>
                  <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-6  mt-6">
                    {
                      resourceSorter(resources,cat).map((resource,cidx)=>{
                        return(
                        <a href={`${resource.app}`} target="_blank" >
                           <div id={`${cidx}`}>
                              <SmallCard description={resource.description} title={resource.heading} cover={resource.cover}  />
                           </div>
                        </a>
                        )
                      })
                    }
                  </div>
                  <div className="h-1 w-2/12  border-b-4 mt-6 border-secondary "></div>
                </div>
               
              )
            })
          }
          </div>
        </div>

    )
}


export async function getStaticProps() {
  const postGraphCMS = new GraphQLClient(process.env.API_ENDPOINT! , { headers: {} })
  const {resources} =  await postGraphCMS.request(ALLRESOURCES)
  return {
    props: {
      resources,

    }
  }
}
export default ResourcesPage