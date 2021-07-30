import {foundInterior, foundPaintColor, foundTechnology, foundType, foundWheel} from "./foundMaterials.js"
import {getOrderBuilder} from "./database.js"


export const SelectionsDisplay = () =>{
    let htmlString = `<h2> Selected Items </h2>`
    let runningTotal = 0
    if (getOrderBuilder().paintColorsId !== undefined){
        htmlString += `<h3> Paint Color : ${foundPaintColor().name} || Price: $${foundPaintColor().price} </h3>`
        runningTotal += foundPaintColor().price
    }
    if (getOrderBuilder().technologysId !== undefined){
        htmlString += `<h3> Technology : ${foundTechnology().name} || Price: $${foundTechnology().price} </h3>`
        runningTotal += foundTechnology().price
    }
    
    if (getOrderBuilder().wheelsId !== undefined){
        htmlString += `<h3> Wheel : ${foundWheel().name} || Price: $${foundWheel().price} </h3>`
        runningTotal += foundWheel().price
    }
    if (getOrderBuilder().interiorsId !== undefined){
        htmlString += `<h3> Interior : ${foundInterior().name} || Price: $${foundInterior().price} </h3>`
        runningTotal += foundInterior().price
    }
    if (getOrderBuilder().typeId !== undefined){
        htmlString += `<h3> Type : ${foundType().type} </h3>`
        switch (getOrderBuilder().typeId){
            case 1:
                runningTotal *= 1.0
                break;
            case 2:
                runningTotal *= 1.5
                break;
            case 3:
                runningTotal *= 2.25
                break;
        }
    }
    
    htmlString += `<h3 class="estimatedTotal">Estimated Total: $${runningTotal}</h3>`
    return htmlString
}