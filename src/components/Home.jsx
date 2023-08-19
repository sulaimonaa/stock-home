import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../assets/list.png';
import StockMkt from '../assets/stock-exchange.png';
import Menu from '../assets/menu-bar.png';
import { useEffect } from 'react';
import { FetchFinancialStatements } from '../redux/financialStatementSlice';
import { Link } from 'react-router-dom';
import Navigation from './Nav';

const Home = () => {
    const dispatch = useDispatch();
    const financialList = useSelector((state) => state.financialstatements.value);
    const status = useSelector((state) => state.financialstatements.status);
    const error = useSelector((state) => state.financialstatements.error);

    useEffect(() => {
        dispatch(FetchFinancialStatements());
    }, [dispatch]);

    return (
        <>
        <Navigation />
        <div className="home-wrap">
            <h1>Welcome To Financial Home</h1>
            <p>
            The Financial Home App is a web application built with React that allows users to explore and search for information about various stocks, financial statements, and related market data. Users can search for specific stocks, view detailed financial information, and keep track of their favorite stocks' performance.
            </p>
            <div className="card">
                <div className="card-list">
                    <h3>Financial Settlement List</h3>
                    <img src={List} alt='list icon' />
                    <h5>Available list: 
                    {status === 'loading' && <p>Loading...</p>}
                    {status === 'failed' && <p>Error: {error}</p>}
                    {status === 'successful' && (<span> {financialList.length}</span>)}   
                    </h5>
                    <Link to='/financial-settlement-list' className='cList'>Check List</Link>
                </div>
                <div className="card-list">
                    <h3>Stock List</h3>
                    <img src={StockMkt} alt='list icon' />
                    <h5>Check available stock list</h5>
                    <Link to='/stocks' className='cList'>Check Market</Link>
                </div>
                <div className="card-list">
                    <h3>About Project</h3>
                    <img src={Menu} alt='list icon' />
                    <h5>You read about project</h5>
                    <Link to='/about' className='cList'>Read Now</Link>
                </div>
            </div>
        </div>
        </>
    )
};

export default Home;
