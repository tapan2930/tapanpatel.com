import Link from "next/link"
import { motion } from "framer-motion"


const error404 = () =>{
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} >
            <div className="bg-primary text-text font-body pb-16 h-screen">
            <div className="flex justify-center items-center h-full flex-col">
                <div className="bg-tertiary frost p-4 rounded-md shadow-md text-xl ">
                    <span className="mr-2">404</span>
                    <span>|</span>
                    <span className="text-secondary ml-2 font-semibold">Page Not Found</span>
                </div>
                <div className="mt-6">
                    <Link href="/" className="text-sm font-light border-b border-secondary border-dotted pb-2 ">
                        <span > &#8592; Back To home </span> 
                    </Link>
                </div>
                    
            </div>
        </div>
        </motion.div>
        
    )
}

export default error404