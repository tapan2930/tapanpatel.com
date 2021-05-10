import React from 'react'
import {EducationType} from "../../../../types/resume.Types"

type propType = {
    data:Array<EducationType>,
    resumeOnly:boolean
}

const Education :React.FC<propType> = ({data,resumeOnly=false}):React.ReactElement => {
    return (
        <div className={`${resumeOnly ? "R-container" : "" } R-section `}>
            <h2 className="R-header">Education:</h2>
            {data.map(e=>(
                <div className="R-section-base">
                    <p>{e.degree} <span className="R-extras ml-2"> {e.from} - {e.to}</span></p>
                    <p>{e.course} <span className="R-highligth ml-2"> CPI: ({e.cpi})</span></p>
                    <p><span className="R-sub-header">{e.instituteName}</span>, <span className="R-extras ml-2">{e.location}</span></p>
                </div>
            ))}
        </div>
    )
}

export default Education