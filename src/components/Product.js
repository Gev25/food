import React, {useEffect, useState} from 'react';
import ProductCard from "./ProductCard";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesRequest} from "../store/actions/categories";

function Product() {
    const {hash} = useLocation();
    const [filter, setFilter] = useState(hash.replace('#', '') || 'RICE-MENU')
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);

    useEffect(() => {
        dispatch(getCategoriesRequest());
    });

    return (
        <section className='product__section'>
            <div className='product__container'>
                <div className='row'>
                    <div className='button__block'>
                        <button className={`filter-btn ${filter === 'Offers' ? 'active__btn' : ''}`}
                                onClick={() => setFilter('Offers')}>Առաջարկներ</button>
                    </div>
                    {categories.map((item) => (
                        <div key={item.id} className='product__item'>
                            <ProductCard item={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Product;
