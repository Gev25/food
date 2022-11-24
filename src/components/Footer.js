import React from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

const footerQuickLinks = [
    {
        display: 'Terms & Conditions',
        url: '#'
    }, {
        display: 'Privacy Policy',
        url: '#'
    }, {
        display: 'Return & Refund',
        url: '#'
    }, {
        display: 'Payment Method',
        url: '#'
    },
]

const footerLinks = [
    {
        display: 'About Us',
        url: '#'
    }, {
        display: 'Menu',
        url: '#'
    }, {
        display: 'Recipes',
        url: '#'
    }, {
        display: 'Contact',
        url: '#'
    },
]


function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__top">
                <div className='container'>
                    <div className="row">
                        <div className='col-lg-4 col-md-4 col-sm-6'>
                            <div className="logo">
                                <h2 className='foot__logo__title'>
                                    <span>
                                        <i className='ri-restaurant-2-line'></i>
                                    </span>
                                    Chef Food
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, incidunt maiores minus
                                    officia reiciendis reprehenderit.</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4'>
                            <h5 className="footer__link-title">Info Links</h5>
                            <ListGroup>
                                {footerQuickLinks.map((item, index) => (
                                    <ListGroupItem key={index} className='link__item'>
                                        <Link to={item.url}>{item.display}</Link>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </div>
                        <div className='col-lg-2 col-md-4'>
                            <h5 className="footer__link-title">Quick Links</h5>
                            <ListGroup>
                                {footerLinks.map((item, index) => (
                                    <ListGroupItem key={index} className='link__item'>
                                        <Link to={item.url}>{item.display}</Link>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </div>

                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <h5 className="footer__link-title">Contact</h5>

                            <ListGroup>
                                <ListGroupItem className='link__item'><i
                                    className='ri-map-pin-line'></i>Armenia, Gyumri</ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem className='link__item'><i
                                    className='ri-mail-line'></i>abrahamyan_09@mail.ru</ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem className='link__item'><i
                                    className='ri-phone-line'></i>+374 77 02 41 36</ListGroupItem>
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <p>copyright 2022, developed by Arm,Gev,Arm. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;