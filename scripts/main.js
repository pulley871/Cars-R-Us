import { Interiors } from "./interiors.js"
import { Orders } from "./orders.js"
import { PaintColors } from "./paintColors.js"
import { Technologys } from "./technologys.js"
import { Wheels } from "./wheels.js"
import {addCustomOrder} from "./database.js"
import {Type} from "./vehicleType.js"
import {SelectionsDisplay} from "./orderOptionsSelected.js"
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton"){
            addCustomOrder()
        }
    }
)

const mainContainer = document.querySelector("#mainContainer")
export const carsRUs = () =>{

    const mainHtml = `

    <section id="paintColors">
        <h3>Paint Colors</h3>
        ${PaintColors()}
    </section>
    <section id="interiors">
        <h3>Interiors</h3>
        ${Interiors()}
    </section>
    <section id="technologys">
        <h3>Technologies</h3>
        ${Technologys()}
    </section>
    <section id="wheels">
        <h3>Wheels</h3>
        ${Wheels()}
    </section>
    <section>
        <h3>Type</h3>
        ${Type()}
    </section>
    <article>
        <section>
            ${SelectionsDisplay()}
        </section>
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders">
        <h2>Custom Car Orders</h2>
            ${Orders()}
    </article>
    `
    return mainHtml
}



const renderAllHtml = () =>{
    mainContainer.innerHTML = carsRUs()
}
renderAllHtml()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHtml()
})