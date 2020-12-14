import React from "react";
import Link from "next/link";

interface IProps {
    text: string | undefined;
    link: string | undefined;
  }
  
  const Button = ({ text, link }: IProps) => {

    return (
      <Link href={`${link}`}>
        <a  className={`transition duration-200 shadow-sm hover:shadow-md ease-in-out md:bg-tertiary block md:inline-block  md:rounded-md text-center px-3 py-2 text-white cursor-pointer`}>
        <span className="align-middle">{text}</span>
        </a>
        </Link>
    );
  };
  
export default Button;