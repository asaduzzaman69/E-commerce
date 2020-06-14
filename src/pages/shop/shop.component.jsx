import React from 'react'
import './shop.style.scss'
import Shop_Data from './shop.data'
import CollectionPreview from '../../component/collection-preview/collection-preview.component'
 
class ShopPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            collection:Shop_Data
        }
    }
    render(){
        const {collection} = this.state;
        console.log(collection)
        return(
        <div>{
            collection.map(({id,...otherCollectionPreviewInfo}) => (
               
                <CollectionPreview key={id} {...otherCollectionPreviewInfo} />
            ))
            
            }</div>
        )
    }

}
export default ShopPage;