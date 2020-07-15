import React from 'react'
import './cart-component.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import {createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { connect } from 'react-redux'
import {CartToogleAction} from '../../redux/cart/cart.action'
import  CartItem  from '../cart-item/cart-item.component'

const CartDropdown = ({ CartItems,history,dispatch }) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        { CartItems.length ?
         (CartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        )) 
        ): <span className='empty-message'>The is no item In your Carts</span>
        }
      </div>
      <CustomButton onClick={() =>{ 
        
        history.push('/checkout')
        dispatch(CartToogleAction())
    
    
    }}>GO TO CHECKOUT</CustomButton>
    </div>
  );
  
  const mapStateToProps = createStructuredSelector ({
    CartItems:selectCartItems
  });
  
  export default withRouter(connect(mapStateToProps)(CartDropdown));
