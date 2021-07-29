import { getInterior, setInterior } from "./database.js";

const interiors = getInterior()
document.addEventListener(
    "change",
    (event) =>{
        if (event.target.name === "styles"){
            setInterior(parseInt(event.target.value))
            window.alert(`You chose interior style ${event.target.value}`)
        }
    }
)
export const Interiors= () =>{
    let html = `
        <ul>`
    const interiorsHtml = interiors.map(
        interior =>{
            return `<li>
            <input type="radio" name="styles" value="${interior.id}" /> ${interior.name}
        </li>`
        }
    )
    html+= interiorsHtml.join("")    
    html += `</ul>`
    return html
}
