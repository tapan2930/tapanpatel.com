import React from 'react'
import {ExtraType} from "../../../../types/resume.Types"


type propType =  {
    data: Array<ExtraType>,
    resumeOnly:boolean
}

const Extra :React.FC<propType> = ({data,resumeOnly=true}):React.ReactElement => {
    console.log(data)
    return (
        <div className={`${resumeOnly ? "R-container" : "" } R-section `}>
            <h2 className="R-header">Collage Accolades</h2>
            <div className="R-section-base">
                <ul className="list-disc pl-4">
                {
                    data[0].extras.map(extra =>{
                        return (
                            <li>{extra}</li>
                        )
                    })
                }
                </ul>
                
            </div>
        </div>
    )
}

export default Extra