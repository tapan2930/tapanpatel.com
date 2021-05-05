import React from "react"

interface IProps {
    title: String | undefined;
}

const Hashtag = ({title}: IProps)=>{
    return (
        <div className="text-xs p-1 rounded-md  tracking-wide text-pink-500 bg-trueGray-800 flex-none">
            {`${title}`}
        </div>
    )

}

export default Hashtag