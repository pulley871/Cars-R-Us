import { getOrderBuilder, getPaintColors, setColor } from "./database.js";

const paintColors = getPaintColors();

document.addEventListener(
    "change",
    (event) =>{
        if (event.target.name === "colors"){
            setColor(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
            
        }
    }
)

export const PaintColors = () =>{
    let html = `
        <ul>`
    const paintColorsHtml = paintColors.map(
        color =>{
            if (color.id === getOrderBuilder().paintColorsId){
                return `<li>
                <input type="radio" name="colors" value="${color.id}" checked/> ${color.name}
                 </li>`
            }else{
                return `<li>
                <input type="radio" name="colors" value="${color.id}" /> ${color.name}
                </li>`
            }
            
        }
    )
    html+= paintColorsHtml.join("")    
    html += `</ul>`
    return html
}

