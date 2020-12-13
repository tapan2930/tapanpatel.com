import { NextPage } from 'next';
import Link from 'next/link';
import Navbar from "@components/Navbar/Navbar"
import BigCard from "@components/Cards/bigCards"
import Card from "@components/Cards/cards"
import { GraphQLClient  } from 'graphql-request'
import {PINNEDPOST, UNPINNEDPOST} from '@api/quries.ts'

interface postdata{
  title: string;
  excerpt: string;
  code: string;
  app: string | undefined;
  projectStatus: string;
  tags: any;
  cover: any;
  slug:string | undefined;
}



const Post: NextPage = ({pinnedPost, unpinnedPost}:any)=>{
    return (
        <main className="bg-primary text-white font-body pb-16">
        <Navbar/>

        <div className="container mx-auto px-6 sm:px-10 md:px-10 lg:px-48">
          <div className="text-center pt-16"> <h1 className="text-4xl">Blogs</h1></div>
          <div className="my-16">
            <div className="mb-16">
                <h2 className="text-lg  tracking-wider bg-tertiary p-3 inline-block rounded-md ">Pinned Blogs:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {
                   pinnedPost.map((post:postdata, idx:Number)=>{
                       return (
                        <Link href={`/blogs/${post.slug}`} >
                        <a href={`/blogs/${post.slug}`} >
                           <div id={`${idx}`}>
                               <BigCard description={post.excerpt} title={post.title} cover={post.cover} tags={post.tags} app={""} code={""}  />
                           </div>
                           </a>
                 </Link>
                       )
                   })
                }
                </div>
            </div>
                
            <div>
                <h2 className="text-lg tracking-wider bg-tertiary p-3 inline-block rounded-md " >All Posts:</h2>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6  mt-6">
                {
                   unpinnedPost.map((post:postdata, idx:Number)=>{
                     console.log(post)
                       return (
                        <Link href={`/blogs/${post.slug}`} >
                        <a href={`/blogs/${post.slug}`} >
                           <div id={`${idx}`}>
                              <Card description={post.excerpt} title={post.title} cover={post.cover} tags={post.tags} app={""} code={""}  />
                           </div>
                        </a>
                 </Link>
                       )
                   })
                }
                </div>
            </div>
          </div>
        </div>
    </main>
    )
}


export async function getStaticProps() {
    const postGraphCMS = new GraphQLClient(process.env.API_ENDPOINT! , { headers: {} })
    const {posts:pinnedPost} =  await postGraphCMS.request(PINNEDPOST) 
    const {posts:unpinnedPost} =  await postGraphCMS.request(UNPINNEDPOST) 
    return {
      props: {
        pinnedPost,
        unpinnedPost
      }
    }
  }

export default Post