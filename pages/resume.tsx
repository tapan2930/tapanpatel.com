import Navbar from "@components/Navbar/Navbar"
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeDisplay() {

    return (
        <div className="bg-primary text-text font-body pb-16">
            <Navbar />
            <div className="container mx-auto px-6 sm:px-10 md:px-10 lg:px-72">
           
            <>
      <div className="mt-6">      
        <Document
          file='https://tapanpatel-com.vercel.app/assets/Resume.pdf'
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

