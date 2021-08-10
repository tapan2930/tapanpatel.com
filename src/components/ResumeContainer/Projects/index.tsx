import React from 'react'
import {ProjectsType} from "../../../../types/resume.Types"

type propType = {
    data: Array<ProjectsType>
    resumeOnly:boolean
}

const Projects :React.FC<propType> = ({data,resumeOnly=true}):React.ReactElement => {
    return (
        <div className={`${resumeOnly ? "R-container" : "" } R-section `}>
            <h2 className="R-header">Projects</h2>
            <div className="R-section-base">
            {
                data.map(project=>{
                    return(
                        <div id={project.id} className="">
                                <div className="">
                                <h3 className="R-sub-header border-b border-dotted inline-block border-gray-700">{project.name}</h3>
                                </div>
                                <p className="text-sm font-light my-3 tracking-wide">
                                    {project.description}
                                    <span className="text-secondary font-semibold text-xs">
                                    <a className="mx-1" href={project.code}>Code</a>
                                    {project.web ? <a href={project.code}>| App</a> : ""}
                                    </span>
                                </p>
                                
                        </div>
                    )
                })
            }
            </div>
           
        </div>
    )
}

export default Projects