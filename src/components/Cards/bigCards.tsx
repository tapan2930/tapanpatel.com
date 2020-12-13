import React from "react";
import IconButton from "@components/Button/IconButton";
import Hashtag from "@components/Hashtag/Hashtag";

interface IProps {
  title: string;
  description: string;
  code: string ;
  app: string | undefined;
  projectStatus: string;
  tags: any;
  cover: any;
  
}

const BigCard = (props: IProps) => {
  return (
    <div className="transition duration-200 transform hover:-translate-y-2 hover:shadow-md ease-in-out flex flex-col bg-tertiary rounded-lg">
      <div className=" bg-gray-50 rounded-t-lg">
        <img className="rounded-t-lg h-64" src={props.cover.url} alt={props.title} />
      </div>
      <div className="py-4 px-6  border-gray-300 w-full">
        <div>
          <h1 className="text-xl font-semibold">
            {props.title}
            <span
              className={`text-xs ml-2 font-light ${
                props.projectStatus ? "text-red-200" : "text-green-200"
              }`}
            >
              ( {props.projectStatus ? "Ongoing" : "Completed"} )
            </span>
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
          <p className="font-thin max-h-28 overflow-hidden tracking-wide">{props.description}</p>
        </div>

        {(props.code || props.app) && (
          <div className="flex">
            <div className="mr-4">
              <IconButton text={"web"} buttonType={"button-frosted"} />
            </div>
            <div>
              <IconButton text={"code"} buttonType={"button-frosted"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BigCard;
