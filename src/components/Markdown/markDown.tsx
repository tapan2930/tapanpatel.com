import React, {useEffect, useState} from 'react'
import Prism from "prismjs";
import ReactMarkdown from 'react-markdown'
import styles from  "styles/blog.module.scss"
import DropDownMenu from '@components/DropDownMenu/dropDownMenu';

const ContentMD = ({content}:any)=>{
    const [themeValue,setThemeValue] = useState("") 

    const OnChangeThemeHandler = (theme:string)=>{
        localStorage.setItem("userTheme", theme)
        setThemeValue(themeChooser(theme))
    }

      useEffect(()=>{
        setThemeValue(themeChooser(localStorage.getItem("userTheme")!))
      })

      useEffect(() => {
        Prism.highlightAll();
      }, []);

    return (
        <div className={`${styles.blog} ${themeValue} py-6 relative`} >
            <div className="inline-block absolute left-1/2 -top-7"> <DropDownMenu OnChangeThemeHandler={OnChangeThemeHandler} /></div>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}

const themeChooser = (theme:string) => {
    switch(theme){
        case "default" : return  styles.default;
        case "paper" : return  styles.paper; 
        case "whitish" : return  styles.white; 
        default : return styles.default
    }
}

export default ContentMD