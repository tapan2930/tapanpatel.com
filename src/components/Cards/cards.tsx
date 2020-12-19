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
    coverType: string
}

const Card = (props:IProps)=>{
    let description = props.description.slice(0,150)
    return (
        <div className="transition duration-200 transform hover:-translate-y-2 shadow-md  hover:shadow-sm ease-in-out flex flex-col bg-tertiary rounded-sm">
        <div className=" bg-gray-50 rounded-t-sm h-48 sm:h-52 md:h-64 overflow-hidden p-3">
          <img className="rounded-t-sm object-cover w-full h-full" src={props.cover.url} alt={props.title} />
        </div>
        <div className="py-3 px-3 md:px-6  border-gray-300 w-full">
          <div>
            <h1 className="text-lg font-semibold capitalize text-gray-100">
              {props.title}
            </h1>
          </div>
          <div className="my-2">
            {props.tags.map((tag:string, idx:Number) => {
              return (
                <div id={`${idx}`} className="inline-block mr-2">
                  <Hashtag title={tag} />
                </div>
              );
            })}
          </div>
          <div className="my-2 max-h-16 overflow-hidden">
            <p className="max-h-28 text-sm overflow-hidden tracking-wide capitalize text-text">{description} ...</p>
          </div>
  
          {(props.code || props.app) && (
            <div className="flex">
              <div className="mr-4">
                <IconButton text={"web"} link={"button-frosted"} />
              </div>
              <div>
                <IconButton text={"code"} link={"button-frosted"} />
              </div>
            </div>
          )}
        </div>
      </div>
    )
}

export default Card