import {getInterior, getOrders, getPaintColors, getTechnology, getWheels} from "./database.js"


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()
    const paintColors = getPaintColors();
    const interiors = getInterior();
    const wheels = getWheels();
    const technologies = getTechnology();

    
    let html = "<ul>"

    const listItems = orders.map(order =>{
        const foundColor = paintColors.find(
            (color) =>{
                return color.id === order.paintColorsId
            }
        )
        const foundInterior = interiors.find(
            (interior) =>{
                return interior.id === order.interiorsId
            }
        )
        
        const foundWheel = wheels.find(
            (wheel) =>{
                return wheel.id === order.wheelsId
            }
        )
        const foundTech = technologies.find(
            (tech) =>{
                return tech.id === order.technologysId
            }
        )
        let priceMultiplier = null
        switch (order.typeId){
            case 1:
                priceMultiplier = 1.0
                break;
            case 2:
                priceMultiplier = 1.5
                break;
            case 3:
                priceMultiplier = 2.25
                break;
        }
        const totalPrice = (foundColor.price + foundInterior.price + foundWheel.price + foundTech.price) * priceMultiplier
        const totalPriceString = totalPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
        return `<li>Order Number: ${order.id} || Placed on ${order.timestamp} || Total Cost ${totalPriceString}`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}