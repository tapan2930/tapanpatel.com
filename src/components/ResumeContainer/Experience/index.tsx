import React, { useEffect, useState } from 'react'
import {ExperienceType} from "../../../../types/resume.Types"

type propType = {
    data:Array<ExperienceType>,
    resumeOnly:boolean
}

const Experience :React.FC<propType> = ({data,resumeOnly=false}):React.ReactElement => {
    const [dataList, setData] = useState(data)
    useEffect(() => {
        const sortedData = data.sort((a, b) => new Date(b.fromDate).getTime() - new Date(a.fromDate).getTime());
        setData(sortedData)
    }, [data])
    console.log(data, "-------------ttttttttttttttt")

    const toFormattedDate = (dateString:Date) => {
        const dateObject = new Date(dateString);

    const monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
    ];
    const formattedDate = `${monthNames[dateObject.getUTCMonth()]}, ${dateObject.getUTCFullYear()}`;
    return formattedDate
    }

    return (
        <div className={`${resumeOnly ? "R-container" : "" } R-section `}>
             <h2 className="R-header">Experience:</h2>
             <div>
                {
                    dataList.map(company=>{
                        return(
                            <div className="">
                                <h3 className="R-sub-header border-b border-dotted inline-block border-gray-700">{company.companyName}</h3>
                                <p className="flex justify-between items-center"><span className="text-sm text-secondary my-3">{company.position}</span><span className="R-extras" >({toFormattedDate(company.fromDate)} - {toFormattedDate(company.toDate)})</span></p>
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