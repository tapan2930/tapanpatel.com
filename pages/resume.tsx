import Navbar from "@components/Navbar/Navbar"
import Link from "next/link";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeDisplay() {

    return (
        <div className="bg-primary text-text font-body pb-16">
            <Navbar />
            <div className="container mx-auto px-2 sm:px-10 md:px-10 lg:px-72 flex justify-center  flex-col">
           <div className="mt-3">
           <Link href={"assets/Resume.pdf"} >
             <a>Download</a>
           </Link>
             </div>
            <>
      <div className="mt-6 overflow-scroll md:overflow-hidden ">      
        <Document
          file='https://tapanpatel-com.vercel.app/assets/Resume.pdf'
          renderMode="svg"
        >
          <Page pageNumber={1} />
        </Document>
      </div>
      </> 
  
        </div>   
        </div>  
    );
  }
  export default ResumeDisplay

