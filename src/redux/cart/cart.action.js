import { CartActionTypes } from './cart.types';
export const CartToogleAction = () =>({
    type:CartActionTypes.TOOGLE_CART_HIDDEN
}) 

export const addItems = item => ({
    type:CartActionTypes.ADD_ITEMS,
    payload:item
})
