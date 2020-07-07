import { combineReducers } from 'redux';
import UserReducer from './user/user.reducer'
import CartReducer from './cart/cart.reducer'
window.m = combineReducers;

export default combineReducers({
    user:UserReducer,
    cart:CartReducer

});
