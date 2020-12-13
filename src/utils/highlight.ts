
export const highlight = (line:string) =>{
    let res = line.replace(/(\[.+?\])/g, function (x) {
       let word = x.slice(1,-1);
      return `<span class="text-secondary">${word}</span>`;
    });
    return res
}


