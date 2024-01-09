import React from "react";
import Link from "next/link";

interface IProps {
    text: string | undefined;
    link: string | undefined;
  }
  
  const Button = ({ text, link }: IProps) => {

    return (
      <Link href={`${link}`} className={`transition duration-200 shadow-sm hover:shadow-md ease-in-out lg:bg-tertiary block lg:inline-block  lg:rounded-md text-center px-3 py-2 text-gray-300 cursor-pointer`}>
        <span className="align-middle">{text}</span>
        </Link>
    );
  };
  
export default Button;