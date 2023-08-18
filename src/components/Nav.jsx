import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Menu from '../assets/menu-bar.png';
import Home from '../assets/home-button.png';
import StockMkt from '../assets/stock-exchange.png';

const Navigation = () => {
    return (
        <div className="nav">
            <div className='container navbar'>
                <div className='brand' href="/">Financial Home</div>
                <div className='home-icon'><NavLink to='/'><img src={Home} alt='home icon' /></NavLink></div>
                <div className='home-icon'><NavLink to='/stocks'><img src={ StockMkt } alt='home icon' /></NavLink></div>
                <div className='menu-icon'><NavLink to='/about'><img src={ Menu } alt='menu icon' /></NavLink></div>
            </div>
        </div>
    )
}

export default Navigation;