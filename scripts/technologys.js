import { getOrderBuilder, getTechnology, setTechnology } from "./database.js";

const technologys = getTechnology();

document.addEventListener(
    `change`,
    (event) =>{
        if (event.target.name === "technologys"){
            setTechnology(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
            
        }
    }
)

export const Technologys= () =>{
    let html = `
        <ul>`
    const technologysHtml = technologys.map(
        tech =>{
            if (tech.id === getOrderBuilder().technologysId){
                return `<li>
                 <input type="radio" name="technologys" value="${tech.id}" checked/> ${tech.name}
                </li>`
            }else{
                return `<li>
                <input type="radio" name="technologys" value="${tech.id}" /> ${tech.name}
                </li>`
            }
            
        }
    )
    html+= technologysHtml.join("")    
    html += `</ul>`
    return html
}