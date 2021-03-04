import React from "react";
import {iconSelector} from "@utils/iconSelector"

interface IProps {
  text: string;
  link: string;
}

const IconButton = ({ text, link }: IProps) => {
  let  icon = iconSelector(text)
  return (
    <a href={link} rel="nofollow" target="_blank">
      <div className={`button-frosted transition duration-200 shadow-sm hover:shadow-md ease-in-out cursor-pointer rounded-md px-4 py-2 `}>
      <span>{icon}</span>
    </div>
    </a>
  );
};

export default IconButton;
