import { getWheels, setWheel } from "./database.js";

const wheels = getWheels();

document.addEventListener(
    "change",
    (event) =>{
        if (event.target.name === "wheels"){
            setWheel(parseInt(event.target.value))
            window.alert(`You chose wheel ${event.target.value}`)
        }
    }
)

export const Wheels = () =>{
    let html = `
        <ul>`
    const wheelsHtml = wheels.map(
        wheel =>{
            return `<li>
            <input type="radio" name="wheels" value="${wheel.id}" /> ${wheel.name}
        </li>`
        }
    )
    html+= wheelsHtml.join("")    
    html += `</ul>`
    return html
}