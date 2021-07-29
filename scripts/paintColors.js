import { getPaintColors, setColor } from "./database.js";

const paintColors = getPaintColors();

document.addEventListener(
    "change",
    (event) =>{
        if (event.target.name === "colors"){
            setColor(parseInt(event.target.value))
            window.alert(`You chose color ${event.target.value}`)
        }
    }
)

export const PaintColors = () =>{
    let html = `
        <ul>`
    const paintColorsHtml = paintColors.map(
        color =>{
            return `<li>
            <input type="radio" name="colors" value="${color.id}" /> ${color.name}
        </li>`
        }
    )
    html+= paintColorsHtml.join("")    
    html += `</ul>`
    return html
}

