import { CartActionTypes } from './cart.types';
export const CartToogleAction = () =>({
    type:CartActionTypes.TOOGLE_CART_HIDDEN
}) 

export const addItems = item => ({
    type:CartActionTypes.ADD_ITEMS,
    payload:item
})

export const removeItem = item =>  ({
    type:CartActionTypes.REMOVE_CART_ITEM,
    payload:item
})

export const ClearItems = item => ({
    type:CartActionTypes.CLEAR_ITEM,
    payload:item
})