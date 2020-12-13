import React from "react"

interface IProps {
    title: String | undefined;
}

const Hashtag = ({title}: IProps)=>{
    return (
        <div className="text-xs bg-hash p-1 rounded-md font-light tracking-wide">
            {`${title}`}
        </div>
    )

}

export default Hashtag