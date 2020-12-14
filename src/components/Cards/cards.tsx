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
    // let description = props.description.slice(0,150)
    return (
        <div className=" transition duration-200 transform hover:-translate-y-2 hover:shadow-md ease-in-out flex flex-col md:flex-row bg-tertiary frost rounded-md">
            <div className="flex justify-center bg-gray-50 rounded-t-sm md:rounded-l-sm md:rounded-t-none h-48 sm:h-auto sm:w-48 lg:w-72">
                <img className="rounded-t-sm md:rounded-l-sm md:rounded-t-none  w-full p-2 object-cover" src={props.cover.url} alt={props.title}/>
            </div>
            <div className="py-3 px-3 md:px-6  border-gray-300 w-full">
            <div>
                <h1 className="flex flex-wrap text-xl font-semibold text-gray-100">
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
            <div className="my-2 h-24 sm:max-h-20 lg:h-12 overflow-y-hidden">
                <p className="font-thin">
                    {props.description}
                </p>
            </div>

            {
                    (props.code || props.app) && (  <div className="flex">
                    <div className="mr-4 text-xl"><IconButton text={"web"} link={props.app!}/></div>
                    <div><IconButton text={"code"} link={props.code}/></div>
                </div> )
                }
            </div>       
        </div>
    )
}

export default Card