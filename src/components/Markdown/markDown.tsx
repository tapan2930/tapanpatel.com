import React, {useEffect} from 'react'
import Prism from "prismjs";
import ReactMarkdown from 'react-markdown'
import styles from  "styles/blog.module.scss"

const ContentMD = ({content}:any)=>{
    useEffect(() => {
        Prism.highlightAll();
      }, []);
    return (
        <div className={`${styles.blog}`} >
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}

export default ContentMD