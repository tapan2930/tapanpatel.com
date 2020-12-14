
import Link from 'next/link';
import Navbar from "@components/Navbar/Navbar"
import BigCard from "@components/Cards/bigCards"
import Card from "@components/Cards/cards"
import { GraphQLClient  } from 'graphql-request'
import {PINNEDPOST, ALLPOST} from '@api/quries.ts'

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



const Post = ({pinnedPost, allPost}:any)=>{
    return (
        <main className="hero-bg h-screen overflow-y-scroll text-text font-body pb-16">
        <Navbar/>

        <div className="container mx-auto px-6 sm:px-10 md:px-10 lg:px-72">
          {/* <div className="text-center pt-16"> <h1 className="text-4xl">Blogs</h1></div> */}
          <div className="my-16">
            <div className="mb-16">
                <h2 className="text-xl text-gray-100 ">Pinned</h2><p>Must read post :</p>
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
                <h2 className="text-xl " >All Posts </h2>
                <div className=" grid grid-cols-1 gap-4  mt-6">
                {
                   allPost.map((post:postdata, idx:Number)=>{
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
    const {posts:allPost} =  await postGraphCMS.request(ALLPOST) 
    return {
      props: {
        pinnedPost,
        allPost
      }
    }
  }

export default Post