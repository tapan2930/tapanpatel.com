const resourcesSorter = (resources:Array<any>, key:string)=>{
    let data = resources.filter((resource)=>{
        return resource.category === key
    })

    return data
}

export default resourcesSorter