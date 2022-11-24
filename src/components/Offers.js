import React, {useEffect} from 'react';
import {getOffersRequest} from "../store/actions/offers";
import {useDispatch, useSelector} from "react-redux";


function Offers() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOffersRequest())
    })
    const offers = useSelector(state => state.offers.offers);
    return (
        <div className='offers__container'>
            {offers.map((item)=>(
                <div key={item.id} className='offers__block single__product'>
                    <div>
                        <img src={`http://localhost:4000/${item.imagePath}`} alt='offers'/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Offers;