import Head from 'next/head';
import Link from 'next/link';
import Card from "@components/Cards/cards"
import { GraphQLClient  } from 'graphql-request'
import {PINNEDPOST, ALLPOST} from '@api/quries'
import generateSitemap from "../src/utils/sitemap"
import Base from "../src/Base/index"
import getPlaceholder from "@utils/getPlaceholder"


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
          <meta property="og:url" content="https://tapan.tech/blogs" />
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
                           <div id={`${idx}`}>
                               <Card description={post.excerpt} title={post.title} cover={post.cover} tags={post.tags} app={""} code={""}   />
                           </div>
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
                           <div id={`${idx}`}>
                              <Card description={post.excerpt} title={post.title} cover={post.cover} tags={post.tags} app={""} code={""}  />
                           </div>
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
    const postGraphCMS = new GraphQLClient(process.env.NEXT_PUBLIC_API_ENDPOINT! , { headers: {} })
    const {posts:pinnedPost} =  await postGraphCMS.request<any>(PINNEDPOST).then( async postsJson => {
      if(postsJson?.posts){
        const updatedPosts = await Promise.all(
          postsJson?.posts?.map(async (post: any) => {
            return { ...post, cover: { ...post.cover, placeholder: await getPlaceholder(post.cover.url) } };
          })
        );
        postsJson.posts = updatedPosts
      }
      return postsJson;
    })

    const {posts:allPost} =  await postGraphCMS.request<any>(ALLPOST).then( async postsJson => {
      if(postsJson?.posts){
        const updatedPosts = await Promise.all(
          postsJson?.posts?.map(async (post: any) => {
            return { ...post, cover: { ...post.cover, placeholder: await getPlaceholder(post.cover.url) } };
          })
        );
        postsJson.posts = updatedPosts
      }
      return postsJson;
    })
    await generateSitemap(allPost).then((res) => {
      if(res){
        console.log("Sitemap generated successfully...")
      }else{
        console.log("Problem generating Sitemap...")
      }
    })

  
    return {
      props: {
        pinnedPost,
        allPost
      }
    }
  }

export default Post