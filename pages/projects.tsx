import { NextPage } from "next";
import Navbar from "@components/Navbar/Navbar";
import Card from "@components/Cards/cards";
import { GraphQLClient } from "graphql-request";
import { ALLPROJECTS } from "@api/quries";
import { motion } from "framer-motion";
import PageHead from "../src/utils/HeadHelper/index";

const projectPage: NextPage = ({ data }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="bg-primary  text-text font-body pb-16 h-full">
        <PageHead url="https://pateltapan/projects" />

        <Navbar />
        <div className="container mx-auto px-3 sm:px-10 md:px-10 lg:px-20 xl:px-40">
          <div className="pt-6  md:pt-8 ">
            {" "}
            <h1 className="text-xl text-gray-100">Projects</h1>
            <p>Here are all my work :</p>
          </div>
          <div className=" my-6  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {data.projects.map((project: any, idx: number) => {
              return (
                <div id={`${idx}`} className="mb-6">
                  <Card {...project} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export async function getStaticProps() {
  const client = new GraphQLClient(process.env.API_ENDPOINT!, { headers: {} });
  const data = await client.request(ALLPROJECTS);
  return {
    props: {
      data,
    },
  };
}
export default projectPage;
