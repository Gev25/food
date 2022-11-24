import React, {useRef} from 'react';
import {Link} from "react-router-dom";


const navLinks = [
    {
        display: 'Գլխավոր',
        url: '/'
    }, {
        display: 'Մեր մասին',
        url: '#'
    }, {
        display: 'Մենյու',
        url: '/menu'
    }, {
        display: 'Կապ',
        url: '#'
    }

]

function Header() {
    const menuRef = useRef()
    const menuToggle = () => menuRef.current.classList.toggle('active__menu')
    return (
        <div>
            <header className="head">
                <div className='container'>
                    <div className="navigation">
                        <div className="logo">
                            <h2 className='logo__icon'>
                                <span>
                                    <i className='ri-restaurant-2-line'></i>
                                </span>
                                Chef Food
                            </h2>
                        </div>
                        <div className="nav__menu" ref={menuRef}>
                            <div className="nav__list__wrapper">
                                <ul className="nav__list">
                                    {navLinks.map((item, index) => (
                                        <li className="nav__item" key={index}>
                                            <Link to={item.url} onClick={menuToggle}>{item.display}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="menu__right">
                                    <div className="custom__search">
                                        <input type="text" placeholder='search item...'/>
                                        <span>
                                            <i className='ri-search-line'></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='shop'>
                            <span className="cart__icon">
                                <i className ='ri-shopping-basket-line'></i>
                                <span className="badge">2</span>
                            </span>
                        </div>
                        <div className="mobile__menu">
                            <span>
                                <i className ="ri-menu-line" onClick={menuToggle}></i>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;