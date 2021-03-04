import React from "react";
// import { BiLink } from "react-icons/bi";

interface IProps {
  title: string;
  description: string;
  cover: any;
  url?: string;
}

const SmallCard = (props: IProps) => {
  let description = props.description.slice(0, 150);
  return (
    <div className="transition duration-200 transform hover:-translate-y-2 shadow-md  hover:shadow-sm ease-in-out flex flex-col sm:flex-row bg-tertiary rounded-sm">
      <div className=" h-44 sm:w-28 sm:h-auto overflow-hidden flex-none  bg-gray-200">
        <img
          className="w-full h-full object-cover object-center"
          src={props.cover.url}
          alt={props.title}
        />
      </div>
      <div className="py-3 px-3 md:px-6 w-full">
        <div>
          <h1 className="text-lg font-semibold capitalize text-gray-100">
            {props.title}
          </h1>
        </div>
        <div className="my-2 overflow-hidden max-h-16">
          <p className="max-h-28 text-sm overflow-hidden tracking-wide capitalize text-text">
            {description}
          </p>
        </div>
        <div>
          <p className="text-secondary inline-block">
            <div className="flex pb-1 tracking-wide">
              {/* <span className="trext-sm mr-2"><BiLink /></span> */}
              <span className="text-xs font-normal border-b border-dotted border-secondary flex-none overflow-x-auto">
                {urlCleaner(props.url!)}
              </span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

const urlCleaner = (url: string) => {
  url = url.replace(/^((https|http):\/\/www\.)|^((https|http):\/\/)/g, "");
  return url.slice(0, url!.length - 1);
};

export default SmallCard;
