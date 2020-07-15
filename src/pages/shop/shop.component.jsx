import React from 'react'
import './shop.style.scss'
import CollectOverview from '../../component/collection-overview/collection-overview.component'
import { Route } from 'react-router-dom'
import  Collection from '../../component/collection/collection.component'

 
const ShopPage = ({match}) => {
        return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`}  component={CollectOverview}/>
            <Route path={`${match.path}/:collectionID`} component={Collection}/>
            
        </div>
        )
    

}

export default ShopPage;