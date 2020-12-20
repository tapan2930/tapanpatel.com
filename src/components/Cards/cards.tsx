import React from "react"
import IconButton from "@components/Button/IconButton"
import Hashtag from "@components/Hashtag/Hashtag"
  
interface IProps {
    title: string;
    description: string;
    code: string;
    app: string | null;
    tags: Array<string>;
    cover: any
}

const Card = (props:IProps)=>{
    return (
        <div className="transition duration-200 transform hover:-translate-y-2 shadow-md  hover:shadow-sm ease-in-out flex flex-col bg-tertiary rounded-sm">
        <div className=" bg-gray-50 h-48 sm:h-52 md:h-64 overflow-hidden">
          <img className=" object-cover w-full h-full object-center" src={props.cover.url} alt={props.title} />
        </div>
        <div className="py-4 px-3 md:px-6 w-full">
          <div>
            <h1 className="text-lg font-semibold capitalize text-gray-100">
              {props.title}
            </h1>
          </div>
         
          <div className="my-4 max-h-16 h-16 overflow-hidden ">
            <p className="max-h-28 text-sm overflow-hidden tracking-wide capitalize text-text">{props.description}</p>
          </div>
          <div className="my-4">
            {props.tags.map((tag:string, idx:Number) => {
              return (
                <div id={`${idx}`} className="inline-block mr-2">
                  <Hashtag title={tag} />
                </div>
              );
            })}
          </div>
          {(props.code || props.app) && (
            <div className="flex">
               {props.app && (<div className="mr-4">
                <IconButton text={"web"} link={props.app!} /> 
              </div>)}
              <div>
                <IconButton text={"code"} link={props.code} />
              </div>
            </div>
          )}
        </div>
      </div>
    )
}

export default Card