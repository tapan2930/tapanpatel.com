import React from "react";
import Link from "next/link";

interface IProps {
  text: string | undefined;
  link: string | undefined;
}

const BigButton = ({ text, link }: IProps) => {
  return (
    <Link href={`${link}`} className={`transition duration-200 transform hover:-translate-y-2 shadow-md hover:shadow-sm ease-in-out big-button text-center p-8 md:p-10 lg:p-12 xl:p-16 text-white w-full h-full text-2xl md:text-4xl lg:text-4xl xl:text-6xl flex flex-col items-center justify-center cursor-pointer`}>
        <span className="align-middle">{text}</span>
    </Link>
  );
};

export default BigButton;
