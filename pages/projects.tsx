import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from "@components/Navbar/Navbar"
import Card from "@components/Cards/cards"
import { GraphQLClient  } from 'graphql-request'
import {ALLPROJECTS} from '@api/quries'


const projectPage: NextPage = ({data}:any) => {
 
    return (
      <main className="bg-primary  text-text font-body pb-16 h-full">
         <Head>
         <meta property="og:url" content="https://pateltapan.com/projects" />
      <meta property="og:type" content="web" />
      <meta property="og:title" content="Tapan Patel Portfolio" />
      <meta property="og:image" content="/og.png" />
      <link rel="icon" href="/fevicon.ico" />
      <title> Projects | Tapan Patel</title>
          </Head>
          <Navbar/>

          <div className="container mx-auto px-3 sm:px-10 md:px-10 lg:px-20 xl:px-40">
            <div className="pt-6  md:pt-8 "> <h1 className="text-xl text-gray-100">Projects</h1><p>Here are all my work :</p></div>
            <div className=" my-6  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {
                data.projects.map((project:any,idx:number)=>{
                  return (
                    <div id={`${idx}`} className="mb-6">
                      <Card {...project} />
                    </div>
                  )
                })
              }
            </div>
          </div>
      </main>
    )
  }

  export async function getStaticProps() {
    const client = new GraphQLClient(process.env.API_ENDPOINT! , { headers: {} })
    const data =  await client.request(ALLPROJECTS) 
    return {
      props: {
        data
      }
    }
  }
export default projectPage