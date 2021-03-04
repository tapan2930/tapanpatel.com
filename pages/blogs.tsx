import Head from 'next/head';
import Link from 'next/link';
import Card from "@components/Cards/cards"
import { GraphQLClient  } from 'graphql-request'
import {PINNEDPOST, ALLPOST} from '@api/quries'
import generateSitemap from "../src/utils/sitemap"
import Base from "../src/Base/index"


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
      // <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} >
           <main className="bg-primary text-text font-body pb-16">
          <Head>
          <meta property="og:url" content="https://pateltapan.com/blogs" />
      <meta property="og:type" content="web" />
      <meta property="og:title" content="Tapan Patel Portfolio" />
      <meta property="og:image" content="/og.png" />
      <link rel="icon" href="/fevicon.ico" />
      <title> Blogs | Tapan Patel</title>
          </Head>

        {/* <Navbar /> */}

      <Base> 
      <div className="container mx-auto px-3 sm:px-10 md:px-10 lg:px-20 xl:px-40">
          {/* <div className="text-center pt-16"> <h1 className="text-4xl">Blogs</h1></div> */}
          <div className="my-8">
            <div className="mb-16">
                <h2 className="text-xl text-gray-100 ">Pinned</h2><p>Must read post :</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {
                   pinnedPost.map((post:postdata, idx:Number)=>{
                       return (
                        <Link href={`/blogs/${post.slug}`} >
                        <a href={`/blogs/${post.slug}`} >
                           <div id={`${idx}`}>
                               <Card description={post.excerpt} title={post.title} cover={post.cover} tags={post.tags} app={""} code={""}   />
                           </div>
                           </a>
                 </Link>
                       )
                   })
                }
                </div>
            </div>
                
            <div>
                <h2 className="text-xl text-gray-100 " >All Posts </h2>
                <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-6">
                {
                   allPost.map((post:postdata, idx:Number)=>{
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
      </Base>
    </main>
      // </motion.div>
       
    )
}


export async function getStaticProps() {
    const postGraphCMS = new GraphQLClient(process.env.API_ENDPOINT! , { headers: {} })
    const {posts:pinnedPost} =  await postGraphCMS.request(PINNEDPOST) 
    const {posts:allPost} =  await postGraphCMS.request(ALLPOST) 
    await generateSitemap(allPost)
    return {
      props: {
        pinnedPost,
        allPost
      }
    }
  }

export default Post