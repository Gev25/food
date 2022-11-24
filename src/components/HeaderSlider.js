import React, {useEffect} from 'react';
import Slider from 'react-slick'
import {getSliderRequest} from "../store/actions/slider";
import {useDispatch, useSelector} from "react-redux";



function HeaderSlider() {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSliderRequest())
    })
    const slider = useSelector(state => state.slides.slides)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }

    return (

        <section>
            <div className='container'>
                <Slider {...settings}>
                    {slider.map((item)=>(
                        <div key={item.id}>
                            <div className='slider__wrapper'>
                                <div className='slider__img'>
                                    <img src={`http://localhost:4000/${item.imagePath}`} alt='slider'/>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default HeaderSlider;