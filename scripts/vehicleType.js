import { setType, getTypes, getOrderBuilder } from "./database.js"

export const Type = () =>{
    const types = getTypes()
    let htmlString = `<ul>`
    const mappedTypes = types.map (type =>{
        if (type.id === getOrderBuilder().typeId){
            return `<li><input type="radio" name="type" value="${type.id}" checked/>${type.type}</li>`
        }else{
            return `<li><input type="radio" name="type" value="${type.id}"/>${type.type}</li>`
        }

    })
    htmlString += mappedTypes.join("")
    htmlString += `</ul>`
    return htmlString
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type"){
            setType(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
            
        }
    }
)