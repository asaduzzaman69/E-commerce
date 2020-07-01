import React from 'react'
import './cart-component.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className="car-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>


    </div>
)
export default CartDropdown;