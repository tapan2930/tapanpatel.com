import React from 'react'
import {skillsType} from "../../../../types/resume.Types"


type propType = {
 data:Array<skillsType>,
 resumeOnly:boolean
}

const Skills :React.FC<propType> = ({data,resumeOnly=true}):React.ReactElement => {
    let programmingAndDatabaseSkill = data.filter(skill=>skill.category === "PROGRAMMINGANDDB")
    let frameWOrkSkill = data.filter(skill=>skill.category === "FRAMEWORKANDTOOLS")
    return (
        <div className={`${resumeOnly ? "R-container" : "" } R-section `}>
            <h2 className="R-header">Skills</h2>
            <div>
                {/* Skill set 1 */}
                <h3 className="R-sub-header border-b border-dotted inline-block border-gray-700">Programming Languages and Database :</h3>
                <div className="R-base my-2">
                {
                    programmingAndDatabaseSkill.map(skill=>{ 
                        return(
                            <div className="inline-block mr-2 text-xs button-frosted  px-1 rounded-sm border border-dotted border-gray-600">{skill.skill}</div>
                        )
                    })
                }
                </div>
            </div>


            <div>
                {/* Skill set 2 */}
                <h3 className="R-sub-header border-b border-dotted inline-block border-gray-700 ">Framework And Tools :</h3>
                <div className="R-base my-2">
                {
                    frameWOrkSkill.map(skill=>{
                        return(
                            <div className="inline-block mr-2 text-xs button-frosted px-1 rounded-sm border border-dotted border-gray-600">{skill.skill}</div>
                        )
                    })
                }
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}


export default Skills