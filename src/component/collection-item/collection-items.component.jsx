import React from 'react'
import './collection-items.scss'
import { connect } from 'react-redux'
import {addItems} from '../../redux/cart/cart.action'
import CustomButton from '../custom-button/custom-button.component'
const CollectionItem = ({item,addItem}) => {
    
     const {imageUrl,name,price} = item;
    return (
   

           <div className='collection-item'>
        <div className="image" 
        style={{
            backgroundImage:`url(${imageUrl})`
        }} />
     <div className="collection-footer">
            <span className='name'>{name}</span>
            <span className="price">{price}</span>

    </div>
    <CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>

    </div> 
    

)}

const mapDispatchToProps = dispatch => ({
    addItem:items => dispatch(addItems(items))
})
export default connect(null,mapDispatchToProps)(CollectionItem);