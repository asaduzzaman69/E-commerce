import React from 'react'
import './collection-overview.styles.scss'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollection } from '../../redux/shop/shop.selector'

const CollectOverview = ({collection}) => (
    <div className="collection-overview">
        {
            collection.map(({id,...otherCollectionPreviewInfo}) => (
               
                <CollectionPreview key={id} {...otherCollectionPreviewInfo} />
            ))
            
            }
    </div>
)
    

const mapStateToProps = createStructuredSelector({
    collection: selectShopCollection
    
})

export default connect(mapStateToProps)(CollectOverview)
