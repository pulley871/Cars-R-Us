import {getOrderBuilder, getInterior, getPaintColors,getWheels, getTechnology, getTypes} from "./database.js"


export const foundInterior = () => getInterior().find(interior =>{return interior.id === getOrderBuilder().interiorsId})
export const foundPaintColor= () => getPaintColors().find(color =>{return color.id === getOrderBuilder().paintColorsId})
export const foundWheel = () => getWheels().find(wheel =>{return wheel.id === getOrderBuilder().wheelsId})
export const foundTechnology = () => getTechnology().find(tech =>{return tech.id === getOrderBuilder().technologysId})
export const foundType = () => getTypes().find(type =>{return type.id === getOrderBuilder().typeId})




