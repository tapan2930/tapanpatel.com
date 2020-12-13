import Navbar from "@components/Navbar/Navbar"
import ContentMD from "@components/Markdown/markDown"
import { GraphQLClient  } from 'graphql-request'
import {POSTLIST, POST} from '@api/quries.ts'
// import { BsDot } from "react-icons/bs"


interface postList {
    slug: string
}

// interface InAuthor {
//     name:string;
//     picture:any
// }

// interface InPostData {
//     date: string;
//     title: string;
//     excerpt: string;
//     tags: Array<string> | string;
//     content: String;
//     cover:any
//     author: InAuthor
// }



const Post = ({postData}:any)=>{
    return (
        <main className="bg-primary text-white h-full pb-12">
            <Navbar />
            <div className="container px-1 sm:px-10 md:px-10 lg:px-72">
                <div>
                    <div>
                        <h1 className="text-gray-300 text-5xl pt-12 pb-2 mb-6">
                            {postData.title}
                        </h1>
                        {/* <div className="flex text-gray-300 items-center my-6 ">
                            <img width="40" src={postData.author.picture.url} alt=""/>
                            <h2 className="ml-2">{postData.author.name}</h2>
                            <BsDot />
                            <p className="text-gray-300">
                            {postData.date}
                        </p>
                        </div> */}
                        
                    </div>
                </div>
                <div className="bg-tertiary "> 
                <div>
                    <img width="100%" src={postData.cover.url} alt={postData.title}/>
                </div>
                <div className="px-2 sm:px-3 md:px-6 py-6 mb-12">
                <ContentMD content={postData.content} />
                </div>
                </div>
          
            </div>
        </main>
    )
}

export default Post


export async function getStaticProps({params}:any) {
    const variable = {
        "slug": params.slug
    }
    const postListGraphCMS = new GraphQLClient(process.env.API_ENDPOINT! , { headers: {} })
    const {post} =  await postListGraphCMS.request(POST,variable) 
    return {
      props: {
        postData:post
      }
    }
}

export async function getStaticPaths(){
    const postGraphCMS = new GraphQLClient(process.env.API_ENDPOINT! , { headers: {} })
    const {posts: postList} =  await postGraphCMS.request(POSTLIST) 
    return {
        paths: postList.map((pl:postList)=>{
            return {
                params: {
                   slug: pl.slug 
                }
            }
        }),
        fallback: false
    }
}

  