import React from "react";
import Link from "next/link";

interface IProps {
    text: string | undefined;
    link: string | undefined;
  }
  
  const BigButton = ({ text, link }: IProps) => {

    return (
      <Link href={`${link}`}>
        <a  className={`transition duration-200 transform hover:-translate-y-2 hover:shadow-md ease-in-out big-button text-center p-8 md:p-16 text-white w-full h-full text-4xl md:text-6xl flex flex-col items-center justify-center cursor-pointer`}>
        <span className="align-middle">{text}</span>
        </a>
        </Link>
    );
  };
  
export default BigButton;