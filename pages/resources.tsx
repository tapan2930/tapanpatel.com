import SmallCard from "@components/Cards/smallCard"
import { GraphQLClient  } from 'graphql-request'
import {ALLRESOURCES} from '@api/quries'
import resourceCatMap  from '@utils/resourceCategoryMapper'
import resourceSorter  from '@utils/resourceSorter'
import Base from "../src/Base/index"
import PageHead from "../src/utils/HeadHelper/index"
import { BiCreditCardFront } from "react-icons/bi"




const ResourcesPage = ({resources}:any)=>{
  const resourceCategory = [...resourceCatMap(resources)]
    return (
          <div className="bg-primary text-text font-body pb-16">
          <PageHead url="https://pateltapan.com/resources" title={"Resources | Tapan Patel"}/>
          <Base>
          <div className="container mx-auto px-3 sm:px-10 md:px-10 lg:px-20 xl:px-40 py-6">
          {
            resourceCategory.map((cat,idx)=>{
              return (
                <div className="mb-12"  id={`${idx}`}>
                  <h2 className="text-xl text-gray-100 inline-flex items-center "> <span className="mr-2 text-secondary text-3xl"> <BiCreditCardFront /></span>  {cat.split("_").join(" ")} </h2>
                  <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-6  mt-3">
                    {
                      resourceSorter(resources,cat).map((resource,cidx)=>{
                        return(
                        <a rel="noreferrer" href={`${resource.app}`} target="_blank" >
                           <div id={`${cidx}`}>
                              <SmallCard description={resource.description} title={resource.heading} coverUrl={resource.cover.url} url={resource.app} placeholder={resource.cover.placeholder}  />
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
          </Base>
         
        </div>
    )
}


export async function getStaticProps() {
  const postGraphCMS = new GraphQLClient(process.env.NEXT_PUBLIC_API_ENDPOINT! , { headers: {} })
  const {resources} =  await postGraphCMS.request(ALLRESOURCES)
  return {
    props: {
      resources,
    }
  }
}
export default ResourcesPage