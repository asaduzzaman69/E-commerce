import React from 'react'
import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assest/crown.svg'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { cartHiddenSelector } from '../../redux/cart/cart.selector'
import { currenUserSelector } from '../../redux/user/user.selector'
import { createStructuredSelector  } from 'reselect'
import {auth} from '../../Firebase/firebase.utils'
const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link className='logo-container' to='/'>
        <Logo className='logo'/>
        
        </Link>
        <div className="options">
            <Link to='/shop' className='option'>
                Shop
            </Link>
            <Link to='/shop' className='option'>
                Contact
            </Link>
            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>
                    Sign Out
                </div>
                : <Link to='/signIn'> Sign In</Link>
            }

            <CartIcon />
        </div>
        {
            hidden ? null: <CartDropdown/>
        }
       


    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser:currenUserSelector,
    hidden:cartHiddenSelector

})
export default connect(mapStateToProps)(Header);
