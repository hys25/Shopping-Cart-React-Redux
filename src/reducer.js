import {DECREASE, INCREASE, REMOVE, CLEAR_CART, GET_TOTAL, GET_AMOUNT} from "./actions";

function reducer( state, action ) {
  if (action.type === CLEAR_CART){
    return {...state, cart: []}
  }
  if (action.type === DECREASE){
    return console.log('DECREASE')
  }
  if (action.type === INCREASE){
    return console.log('INCREASE')
  }
  if (action.type === REMOVE){
    return {...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id)}
  }
  return state;
}

export default reducer;