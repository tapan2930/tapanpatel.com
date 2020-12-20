const resourcesCat = (resources:Array<any>)=>{
    let cat = resources.map((resource)=>{
        return resource.category
    })
    
    return new Set(cat)
}


export default resourcesCat;