import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.CartItems
)
export const cartHiddenSelector = createSelector(
    [selectCart],
    cart => cart.hidden

)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    CartItems => CartItems.reduce((acc,cur) => acc + cur.quantity ,0)
)
export const totalCostSelector = createSelector(
    [selectCartItems],
    CartItems => CartItems.reduce((acc,cur) => acc + cur.quantity * cur.price ,0)


)