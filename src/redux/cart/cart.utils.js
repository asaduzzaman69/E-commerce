export const AddItemToCart = (carItems,addItem) => {

    const exist = carItems.find(el => el.id === addItem.id)

    if(exist){
        return carItems.map(el=>
            
            el.id === addItem.id ? {...el,quantity:el.quantity + 1 } : el
            
            
            )   
    }
    return [...carItems, {...addItem,quantity:1}]
}