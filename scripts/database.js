const database = {
    paintColors: [
        {
            id:1,
            name: "Silver",
            price: 400
        },{
            id:2,
            name: "Midnight Blue",
            price: 300
        },{
            id:3,
            name: "Firebrick Red",
            price: 499
        },{
            id:4,
            name: "Spring Green",
            price: 150
        }
    ],
    interiors: [
        {
            id:1,
            name: "Beige Fabric",
            price: 4000
        },{
            id:2,
            name: "Charcoal Fabric",
            price: 50000
        },{
            id:3,
            name: "White Leather",
            price: 40050
        },{
            id:4,
            name: "Black Leather",
            price: 60000
        },
    ],
    technologys: [
        {
            id:1,
            name: `Basic Package(<i>basic sound system</i>)`,
            price: 200
        },{
            id:2,
            name: `Navigation Package(<i>includes integrated navigation controls</i>)`,
            price: 1000
        },{
            id:3,
            name: `Visibility Package(<i>includes side and rear cameras</i>)`,
            price: 990
        },{
            id:4,
            name: `Ultra Package(<i>includes navigation and visibility packages</i>)`,
            price: 4000
        },
    ],
    wheels: [
        {
            id:1,
            name: "17-inch Pair Radial",
            price: 400
        },{
            id:2,
            name: "17-inch Pair Radial Black",
            price: 450
        },{
            id:3,
            name: "18-inch Pair Spoke Silver",
            price: 600
        },{
            id:4,
            name: "18-inch Pair Spoke Black",
            price: 650
        },
    ],
    orderBuilder: {},
    customOrders: []
}


export const getPaintColors = () => {
    return database.paintColors.map(colors => ({...colors}))
}
export const getInterior = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnology = () => {
    return database.technologys.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.customOrders.map(order =>({...order}))
}
//setter functions for the cars items selected

export const setColor = (id) => {
    database.orderBuilder.paintColorsId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelsId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologysId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorsId = id
}
export const setType = (id) => {
    database.orderBuilder.typeId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    let lastIndex = null
    if(database.customOrders.length === 0){
        lastIndex = 0
        newOrder.id = lastIndex + 1
    }else{
        lastIndex = database.customOrders.length - 1
        newOrder.id = database.customOrders[lastIndex].id + 1
    }
    
    

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}