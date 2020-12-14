import { NextPage } from 'next';
import Navbar from "@components/Navbar/Navbar"
import Card from "@components/Cards/cards"
import { GraphQLClient  } from 'graphql-request'
import {ALLPROJECTS} from '@api/quries.ts'


const projectPage: NextPage = ({data}:any) => {
 
    return (
      <main className=" hero-bg text-text font-body pb-16 h-screen overflow-y-scroll">
          <Navbar/>

          <div className="container mx-auto px-6 sm:px-10 md:px-10 lg:px-72">
            <div className="pt-6  md:pt-16 "> <h1 className="text-3xl text-gray-100">Projects</h1><p>Here are all my work :</p></div>
            <div className=" my-6">
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