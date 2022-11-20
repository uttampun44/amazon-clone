export const initialState = {
  cart: [],

};

const reducer = (state, action) =>{
   switch(action.type){
      case 'Addtocart':
        return{
          ...state,
          cart: [state.basket, action.item],
        };
        default:
          return state;
   }
}
export default reducer;