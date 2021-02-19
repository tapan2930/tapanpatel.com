import {AiOutlineMail,AiOutlineGithub, AiOutlineLinkedin, AiOutlineFacebook,AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai';
import {FaStackOverflow} from 'react-icons/fa'
import { CgDisplayGrid } from "react-icons/cg"
import { BsFileCode } from "react-icons/bs"
import { RiUnsplashFill } from "react-icons/ri"

export const iconSelector = (name) =>{
    switch(name){
        case  "facebook": return <AiOutlineFacebook />;
        case "github": return <AiOutlineGithub />;
        case "instagram": return <AiOutlineInstagram />;
        case "twitter": return <AiOutlineTwitter />;
        case "linkdin": return <AiOutlineLinkedin />;
        case "stackOverFlow": return <FaStackOverflow />;
        case "unsplash": return <RiUnsplashFill />;
        case "web": return <CgDisplayGrid />;
        case "code": return <BsFileCode />;
        case "email": return <AiOutlineMail />
        default: return null
    }
    return null
}

