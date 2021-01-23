import React from "react";
import './collection-item.styles.scss'

export default function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className="collection-item">
    {/* div for image background */ }
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        />
    {/* end div for image background */ }

        {/* div for footer*/ }
        <div className="collection-footer">
          <span className="name">{ name }</span>
          <span className="price">{ price }</span>
        </div>   
        {/* end div for footer*/ } 
    </div>
    
  );
}
