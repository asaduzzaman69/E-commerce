export const AddItemToCart = (carItems,addItem) => {

    const exist = carItems.find(el => el.id === addItem.id)

    if(exist){
        return carItems.map(el=>
            
            el.id === addItem.id ? {...el,quantity:el.quantity + 1 } : el
            
            
            )   
    }
    return [...carItems, {...addItem,quantity:1}]
}

export const removeItemFromCart = (cartItems,cartItemRemove) => {

    const exist = cartItems.find(el => el.id === cartItemRemove.id)
    if(exist.quantity === 1) {
        console.log(exist.quantity);
        return cartItems.filter( el => el.id !== cartItemRemove.id )
    }

    return cartItems.map( el => {
         return el.id === cartItemRemove.id ? {...el,quantity:el.quantity - 1 } : el


            }
        )


}
