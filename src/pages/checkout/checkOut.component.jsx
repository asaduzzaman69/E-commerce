import React from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems,totalCostSelector } from '../../redux/cart/cart.selector'
import CheckOutItems from '../../component/checkout-item/checkout-items.component'

const CheckOut = ({cartItems,totalPrice}) => {
    console.log(cartItems)
    
    return(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>product</span>
            </div>
            <div className="header-block">
                <span>Discription</span>
            </div>
            <div className="header-block">
                <span>quantity</span>
            </div>
            <div className="header-block">
                <span>price</span>
            </div>
            <div className="header-block">
                <span>remove</span>
            </div>
        </div>
          {
            cartItems.map( el => ( <CheckOutItems key={el.id} cartItems={el} />))

        }
        <div className="total">
    <span>Total:${totalPrice}</span>
        </div>
      
    </div>
)}
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    totalPrice:totalCostSelector
})

export default connect(mapStateToProps)(CheckOut);