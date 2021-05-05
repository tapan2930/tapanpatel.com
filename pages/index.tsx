import { NextPage } from "next";
import Header from "@components/Header/Header";
import { motion } from "framer-motion";
import PageHead from "../src/utils/HeadHelper/index";

const IndexPage: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="bg-primary text-white font-body">
        <PageHead />
        <Header />
      </main>
    </motion.div>
  );
};
export default IndexPage;
