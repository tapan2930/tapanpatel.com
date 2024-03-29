import Navbar from "@components/Navbar/Navbar";
import { GraphQLClient } from "graphql-request";
import { RESUMEDATA } from "@api/quries";
import { motion } from "framer-motion";
import PageHead from "../src/utils/HeadHelper/index";
import ResumeContainer from "@components/ResumeContainer";
import {useRouter} from 'next/router'


const ResumeDisplay = ({data}:any) => {
  const router = useRouter();
  const params = router.query;
  
  if(Object.keys(params).length != 0){
      return(
        <div className="bg-primary text-text font-body ">
        <div><ResumeContainer data = {data.resume} resumeOnly = {true}  /></div>
       </div>
      )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-primary text-text font-body pb-16 ">
        <PageHead />
        <Navbar />
        <div className="flex justify-center mt-6">
        </div>
        <div className=" flex justify-center mx-1">
          <ResumeContainer  data = {data.resume} resumeOnly = {false}  /></div>
       </div>
    </motion.div>
  );
}

export async function getStaticProps() {
  const client = new GraphQLClient(process.env.NEXT_PUBLIC_RESUME_API_ENDPOINT!, { headers: {} });
  const data = await client.request(RESUMEDATA);
  return {
    props: {
      data,
    },
  };
}


export default ResumeDisplay;
