import Navbar from "@components/Navbar/Navbar";
import Head from "next/head";
import Link from "next/link";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeDisplay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-primary text-text font-body pb-16 h-screen overflow-y-auto">
        <Head>
          <meta property="og:url" content="https://pateltapan.com/resume" />
          <meta property="og:type" content="web" />
          <meta property="og:title" content="Tapan Patel Portfolio" />
          <meta property="og:image" content="/og.png" />
          <link rel="icon" href="/fevicon.ico" />
          <title> Resume | Tapan Patel</title>
        </Head>
        <Navbar />
        <Link href={"assets/resume/TapanResume.pdf"}>
                <a className="text-3xl md:text-lg fixed md:static md:my-6 bottom-5 right-10 z-10 text-center md:flex md:justify-center  " target="_blank">
                  <div className=" inline-block p-2 rounded-full md:rounded-md shadow-lg md:flex md:items-center bg-secondary">
                    <AiOutlineDownload /> <span className=" md:ml-2 text-sm hidden md:inline">Download</span>
                  </div>
                </a>
              </Link>
        <div className="container mx-auto  px-2 sm:px-10 md:px-10 ">

          <div>
            <div className="mt-6 overflow-auto lg:overflow-hidden relative left-0 lg:flex lg:justify-center ">
              <Document
                file="https://tapanpatel-com.vercel.app/assets/resume/TapanResume.pdf"
                renderMode="svg"
              >
                <Page pageNumber={1} />
              </Document>
              
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default ResumeDisplay;
