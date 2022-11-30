const INIT_STATE = {
    carts: []
};

export const cartreducer = (state = INIT_STATE, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
        return{
            ...state,
            carts:[...state.carts, action.payload]
        }
        case 'REMOVE_FROM_CART':
            const removeitem = state.carts.filter((remove) =>remove.id !== action.payload);

            return{
                 ...state,
                 carts:removeitem
            }
        default:
            return state
    }
}