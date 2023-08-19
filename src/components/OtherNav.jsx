import React from 'react'; // eslint-disable-line no-undef, no-unused-vars
import { NavLink } from 'react-router-dom';
import '../App.css';
import Menu from '../assets/menu-bar.png';
import Home from '../assets/home-button.png';
import StockMkt from '../assets/stock-exchange.png';
import Previous from '../assets/previous.png';

const Navigation = () => {
    return (
        <div className="nav">
            <div className='container navbar'>
                <div className='home-icon'><img src={Previous} alt="previous icon" onClick={() => window.history.back()} /></div>
                <div className='home-icon'><NavLink to='/'><img src={Home} alt='home icon' /></NavLink></div>
                <div className='home-icon'><NavLink to='/stocks'><img src={ StockMkt } alt='home icon' /></NavLink></div>
                <div className='menu-icon'><NavLink to='/about'><img src={ Menu } alt='menu icon' /></NavLink></div>
            </div>
        </div>
    )
}

export default Navigation;