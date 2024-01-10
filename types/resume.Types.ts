type EducationType = {
    id?:string
    instituteName:string,
    from:string,
    to:string,
    course:string,
    degree:string,
    cpi:string,
    location:string
}
type skillsType = {
    id?:string
    skill:string,
    category:string,
}
type ExperienceType = {
    id?:string
    companyName:string,
    location:string,
    workExperience:Array<string>,
    position:string
    fromDate: Date
    toDate: Date
}
type ProjectsType = {
    id?:string
    name:string,
    code:string,
    web:string,
    description:string,
}
type ConnectsType = {
    name:string,
    value:string,
    link:string
}
type PersonalInfoType = {
    name:string,
    desgination:string,
    connect: Array<ConnectsType>
}

type ExtraType = {
    id:string,
    extras:Array<string>
}

type resumeDataType = {
    personalInformation : PersonalInfoType,
    skills: Array<skillsType>,
    educations: Array<EducationType>,
    jobExperiences: Array<ExperienceType>,
    projects: Array<ProjectsType>,
    extras: Array<ExtraType>
}

export type { resumeDataType,PersonalInfoType, EducationType,skillsType,ProjectsType,ExperienceType, ExtraType }