import { getTechnology, setTechnology } from "./database.js";

const technologys = getTechnology();

document.addEventListener(
    `change`,
    (event) =>{
        if (event.target.name === "technologys"){
            setTechnology(parseInt(event.target.value))
            window.alert(`You chose technology ${event.target.value}`)
        }
    }
)

export const Technologys= () =>{
    let html = `
        <ul>`
    const technologysHtml = technologys.map(
        tech =>{
            return `<li>
            <input type="radio" name="technologys" value="${tech.id}" /> ${tech.name}
        </li>`
        }
    )
    html+= technologysHtml.join("")    
    html += `</ul>`
    return html
}