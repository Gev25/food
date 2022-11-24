import React from 'react';
import appimg from '../assets/images/app.png'
import {Link} from "react-router-dom";

function DownLoad() {
    return (
        <section>
            <div className='app__container container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                        <div className="app__img">
                            <img src={appimg} alt=""/>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <div className="app__content">
                            <h5>Download our app</h5>
                            <h2 className='app__title'>Never Feel Hungry! Download Our Mobile App Order Delicious Food</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dolor
                                doloribus esse fugit qui quo repellat sunt veritatis vero!</p>
                            <div className="app__btns">
                                <button className="btn__apple">
                                    <i className='ri-apple-line'></i>
                                    <Link to={'/'}>Apple Store</Link>
                                </button>
                                <button className="btn__android">
                                    <i className='ri-google-play-line'></i>{" "}
                                    <Link to={'/'}>Google Play</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DownLoad;