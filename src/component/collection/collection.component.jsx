import React from 'react'
import './collection.styles.scss'
import { connect } from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selector'


const Collection = ({collection,match}) => {
    

    console.log(match)
return (

    <div>
        catagory page
    </div>
)}
const mapStateToProps = (state,ownProps) => ({
    collection:selectCollection(ownProps.match.params.collectionID)(state)
})
export default connect(mapStateToProps)(Collection);