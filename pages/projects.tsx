import { NextPage } from 'next';
import Navbar from "@components/Navbar/Navbar"
import Card from "@components/Cards/cards"
import { GraphQLClient  } from 'graphql-request'
import {ALLPROJECTS} from '@api/quries.ts'


const projectPage: NextPage = ({data}:any) => {
 
    return (
      <main className="bg-primary text-white font-body pb-16">
          <Navbar/>

          <div className="container mx-auto px-6 sm:px-10 md:px-10 lg:px-48">
            <div className="text-center pt-6  md:pt-16"> <h1 className="text-4xl">Projects</h1></div>
            <div className=" my-6 md:my-16">
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
export default projectPage;