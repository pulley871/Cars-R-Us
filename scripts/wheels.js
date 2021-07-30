import { getWheels, setWheel, getOrderBuilder } from "./database.js";

const wheels = getWheels();

document.addEventListener(
    "change",
    (event) =>{
        if (event.target.name === "wheels"){
            setWheel(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
           
        }
    }
)

export const Wheels = () =>{
    
    let html = `
        <ul>`
    const wheelsHtml = wheels.map(
        wheel =>{
            if (wheel.id === getOrderBuilder().wheelsId){
                return `<li>
                <input type="radio" name="wheels" value="${wheel.id}" checked/> ${wheel.name}
                </li>`
            }else{
                return `<li>
                <input type="radio" name="wheels" value="${wheel.id}" /> ${wheel.name}
                </li>`
            }
            
        }
    )
    html+= wheelsHtml.join("")    
    html += `</ul>`
    return html
}