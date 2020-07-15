import React from 'react'
import './checkout-items.styles.scss'
import { connect } from 'react-redux'
import { removeItem,ClearItems, addItems } from '../../redux/cart/cart.action'

const CheckOutItems = ({cartItems,clearItem,additem,dicreItem}) => {

    const { name,imageUrl,quantity,price} = cartItems;
    
    return (
    <div className="checkout-item">
        <div className="img-container">
            <img src={imageUrl} alt=""/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => dicreItem(cartItems) }>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className="arrow"onClick={() => additem(cartItems)} >&#10095;</div>

            </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => clearItem(cartItems)}>&#10006;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeItem(item)),
    additem: item => dispatch(addItems(item)),
    dicreItem: item => dispatch(ClearItems(item))
})
export default connect(null,mapDispatchToProps)(CheckOutItems);