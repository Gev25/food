import React from 'react';

function ProductCard(props) {
    const {name, imagePath} = props.item;
    return (
        <div className="single__product">
            <div className="product__img">
                <img src={`http://localhost:4000/${imagePath}`} alt="" className='prod__img'/>
            </div>
            <div className="product__content">
                <h6>{name}</h6>
            </div>
        </div>
    )
}

export default ProductCard;
