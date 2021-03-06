import React from "react"
import IconButton from "@components/Button/IconButton"
import Hashtag from "@components/Hashtag/Hashtag"
import MyImage from "@components/ImageLazyLoad";

  
interface IProps {
    title: string;
    description: string;
    code: string;
    app: string | null;
    tags: Array<string>;
    cover: any;
}

const Card = (props:IProps)=>{
  const  image = {
    alt: props.title,
    src: props.cover.url,
    placeholderSrc:props.cover.placeholder,
    style:{"width":"100%", "height":"100%", "objectFit":"cover", "objectPosition": "center"},
    wrapperStyle:"bg-gray-50 h-48 sm:h-52 md:h-64 overflow-hidden"
  }
    return (
        <div className="transition duration-200 transform hover:-translate-y-2 shadow-md rounded-md  hover:shadow-sm ease-in-out flex flex-col bg-tertiary overflow-hidden border border-gray-700 ">
          <a href={props.code} rel="noopener noreferrer nofollow"> <MyImage {...image}  /> </a>
        <div className="py-4 px-3 md:px-6 w-full">
          <div>
            <h1 className="text-lg font-semibold capitalize text-gray-100">
              <a href={props.code} rel="noopener noreferrer nofollow" >
                {props.title}
              </a>
             
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