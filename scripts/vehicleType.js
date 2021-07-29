import { setType } from "./database.js"

export const Type = () =>{
    return  `<ul>
            <li><input type="radio" name="type" value="1" checked/> Car</li>
            <li><input type="radio" name="type" value="2" /> SUV</li>
            <li><input type="radio" name="type" value="3" /> Truck</li>
            </ul>
    `
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type"){
            setType(parseInt(event.target.value))
            window.alert(`You chose a style ${event.target.value}`)
        }
    }
)