import { getInterior, getOrderBuilder, setInterior } from "./database.js";

const interiors = getInterior()
document.addEventListener(
    "change",
    (event) =>{
        if (event.target.name === "styles"){
            setInterior(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)
export const Interiors= () =>{
    let html = `
        <ul>`
    const interiorsHtml = interiors.map(
        interior =>{
            if(interior.id === getOrderBuilder().interiorsId){
                return `<li>
                <input type="radio" name="styles" value="${interior.id}" checked/> ${interior.name}
                </li>`
            }else{
                return `<li>
                <input type="radio" name="styles" value="${interior.id}" /> ${interior.name}
                </li>`
            }
            
        }
    )
    html+= interiorsHtml.join("")    
    html += `</ul>`
    return html
}
