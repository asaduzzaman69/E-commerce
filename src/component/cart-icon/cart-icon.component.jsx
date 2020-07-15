import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assest/shopping-bag.svg'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {  selectCartItemsCount } from '../../redux/cart/cart.selector'
import { CartToogleAction } from '../../redux/cart/cart.action'

const CartIcon = ({toggleDrodown,itemCount}) => (
    <div className='cart-icon' onClick={toggleDrodown}>
        <ShoppingIcon  className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapStateToProps = createStructuredSelector ({
    itemCount:selectCartItemsCount
})
const mapDispatchToProps = dispatch => ({
    toggleDrodown: () => dispatch(CartToogleAction())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);