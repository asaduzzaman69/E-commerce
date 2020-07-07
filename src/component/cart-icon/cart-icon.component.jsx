import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assest/shopping-bag.svg'
import { connect } from 'react-redux'
import { CartToogleAction } from '../../redux/cart/cart.action'

const CartIcon = ({toggleDrodown,itemCount}) => (
    <div className='cart-icon' onClick={toggleDrodown}>
        <ShoppingIcon  className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapStateToProps = ({cart:{CartItems}}) => ({
    itemCount:CartItems.reduce((acc,cur) => acc + cur.quantity ,0)
})
const mapDispatchToProps = dispatch => ({
    toggleDrodown: () => dispatch(CartToogleAction())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);