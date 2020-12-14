import React from "react";
import IconButton from "@components/Button/IconButton";
import Hashtag from "@components/Hashtag/Hashtag";

interface IProps {
  title: string;
  description: string;
  code: string ;
  app: string | undefined;
  tags: any;
  cover: any;
  
}

const BigCard = (props: IProps) => {
  let description = props.description.slice(0,125)
  return (
    <div className="transition duration-200 transform hover:-translate-y-2 hover:shadow-md ease-in-out flex flex-col bg-tertiary rounded-lg">
      <div className=" bg-gray-50 rounded-t-lg ">
        <img className="rounded-t-lg h-64 w-full object-cover" src={props.cover.url} alt={props.title} />
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
        <div className="my-2">
          <p className="font-thin max-h-28 overflow-hidden tracking-wide capitalize text-text">{description} ...</p>
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
  );
};

export default BigCard;
