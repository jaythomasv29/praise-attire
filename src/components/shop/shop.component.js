import React, { Component } from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component'
import SHOP_DATA from './shop.data'
export default class Shop extends Component {
  // access to state
  constructor(props){
  super(props)
  this.state = {
    collections: SHOP_DATA
    // initial state with collection of items
  }    
}

  render() {
    const { collections } = this.state
    return (
      <div>
      {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps } />
          ))
        }
      </div>
    )
  }

}
