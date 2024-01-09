import ContentMD from "@components/Markdown/markDown";
import { GraphQLClient } from "graphql-request";
import { POSTLIST, POST } from "@api/quries";
import { BsDot } from "react-icons/bs";
import PageHead from "../../src/utils/HeadHelper/index";
import { useRouter } from "next/router";
import Link from "next/link";
import Base from "src/Base";

interface postList {
  slug: string;
}

const Post = ({ postData }: any) => {
  const router = useRouter();
  return (

      <main className="bg-primary text-text font-body pb-16">
        <PageHead
          imgUrl={postData.cover.url}
          description={postData.excerpt + postData.tags}
          title={postData.title}
          url={router.pathname}
        />

        <Base>
        <div className="container m-auto px-1 sm:px-10 md:px-10 lg:px-32 xl:px-72">
          <div>
            <div>
              <h1 className="text-gray-300 text-2xl pt-12 text-center  flex justify-center items-center">
                {postData.title}
                <div className="inline-block"></div>
              </h1>
              <div className="tracking-widest text-center text-2xl mb-3">
                ...
              </div>
              <div className="flex text-gray-300  text-xs items-center justify-center mb-2">
                <Link href="/">
                    <h2 className="ml-2 border-b border-dotted text-secondary border-secondary ">
                      {postData.author.name}
                    </h2>
                </Link>
                <BsDot />
                <p className="text-gray-300">{postData.date}</p>
              </div>
            </div>
          </div>
          <div className=" rounded-sm">
            <div>
              <img
                className="rounded-sm"
                width="100%"
                src={postData.cover.url}
                alt={postData.title}
              />
            </div>
            <div className="">
              <ContentMD content={postData.content} />
            </div>
          </div>
        </div>
        </Base>
       
      </main>

  );
};

export default Post;

export async function getStaticProps({ params }: any) {
  const variable = {
    slug: params.slug,
  };
  const postListGraphCMS = new GraphQLClient(process.env.NEXT_PUBLIC_API_ENDPOINT!, {
    headers: {},
  });
  const { post } = await postListGraphCMS.request<any>(POST, variable);
  return {
    props: {
      postData: post,
    },
  };
}

export async function getStaticPaths() {
  const postGraphCMS = new GraphQLClient(process.env.NEXT_PUBLIC_API_ENDPOINT!, {
    headers: {},
  });
  const { posts: postList } = await postGraphCMS.request<any>(POSTLIST);

  return {
    paths: postList.map((pl: postList) => {
      return {
        params: {
          slug: pl.slug,
        },
      };
    }),
    fallback: false,
  };
}
