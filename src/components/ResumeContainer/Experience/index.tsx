import React from 'react'
import {ExperienceType} from "../../../../types/resume.Types"

type propType = {
    data:Array<ExperienceType>,
    resumeOnly:boolean
}

const Experience :React.FC<propType> = ({data,resumeOnly=false}):React.ReactElement => {
    return (
        <div className={`${resumeOnly ? "R-container" : "" } R-section `}>
             <h2 className="R-header">Experience:</h2>
             <div>
                {
                    data.map(company=>{
                        return(
                            <div className="">
                                <h3 className="R-sub-header border-b border-dotted inline-block border-gray-700">{company.companyName}</h3>
                                <p className="flex justify-between items-center"><span className="text-sm text-secondary my-3">{company.position}</span><span className="R-extras" >({company.from} - {company.to})</span></p>
                                <ul className="R-section-base mb-3 list-disc pl-4">
                                {
                                    company.workExperience.map((work,id)=>{
                                        return (
                                            <li id={`${id}`}>{work}</li>
                                        )
                                        })
                                }
                                </ul>
                            </div>
                        )

                    })
                }
             </div>
        </div>
    )
}

export default Experience