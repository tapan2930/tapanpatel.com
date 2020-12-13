import React from "react"
import IconButton from "@components/Button/IconButton"
import Hashtag from "@components/Hashtag/Hashtag"
  
interface IProps {
    title: string;
    description: string;
    code: string;
    app: string | undefined;
    tags: Array<string>;
    cover: any
}

const Card = (props:IProps)=>{
    console.log("passed data",props)
    return (
        <div className=" transition duration-200 transform hover:-translate-y-2 hover:shadow-md ease-in-out flex flex-col md:flex-row bg-tertiary rounded-lg">
            <div className="flex justify-center bg-gray-50 rounded-t-lg md:rounded-l-lg">
                <img className="rounded-t-lg md:rounded-l-lg md:rounded-t-none w-48" src={props.cover.url} alt={props.title}/>
            </div>
            <div className="py-4 px-6  border-gray-300 w-full">
            <div>
                <h1 className="flex flex-wrap text-xl font-semibold">
                {props.title}
                </h1>
            </div>
            <div className="my-2">
                {
                    props.tags.map((tag,idx)=>{
                           return (
                               <div id={`${idx}`} className="inline-block mr-2">
                                   <Hashtag title={tag} />
                               </div>
                           ) 
                    })
                }
            </div>
            <div className="my-2">
                <p className="font-thin">
                    {props.description}
                </p>
            </div>

            {
                    (props.code || props.app) && (  <div className="flex">
                    <div className="mr-4"><IconButton text={"web"} link={"button-frosted"}/></div>
                    <div><IconButton text={"code"} link={"button-frosted"}/></div>
                </div> )
                }
            </div>       
        </div>
    )
}

export default Card