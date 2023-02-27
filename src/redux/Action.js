export const Add = (item) =>{
    return{
        type: 'ADD_TO_CART',
        payload: item
    }
}

export const Delete = (id) =>{
    return{
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}
export const Increment = () =>{
    return{
        type: "Increment"
    }
}
export const Decrement = () =>{
    return{
        type: "Decrement"
    }
}