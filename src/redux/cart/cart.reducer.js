import { CartActionTypes  } from './cart.types';
import { AddItemToCart,removeItemFromCart } from './cart.utils'
const INITIAL_STATE = {
    hidden:true,
    CartItems:[]
}
const CartReducer = (state = INITIAL_STATE, action)  => {
    switch(action.type) {
        case CartActionTypes.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden

            };
            case CartActionTypes.ADD_ITEMS:
                return {
                    ...state,
                    CartItems:AddItemToCart(state.CartItems,action.payload)

                };
            case CartActionTypes.REMOVE_CART_ITEM:
                return  {
                    ...state,
                    CartItems:state.CartItems.filter( el => el.id !== action.payload.id)

                };
                case CartActionTypes.CLEAR_ITEM:
                    return {
                        ...state,
                        CartItems:removeItemFromCart(state.CartItems,action.payload)
                    }
            default:
                return state;
    }
}
window.m = CartReducer


export default CartReducer;