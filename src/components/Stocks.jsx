import React, { useEffect } from "react"; // eslint-disable-line no-undef, no-unused-vars
import { useDispatch, useSelector } from "react-redux";
import { FetchStockLists } from "../redux/stockSlice";
import DisplayStocks from "./DisplayStocks";
import Navigation from './OtherNav';
import '../styles/stocks.css';

const Stocks = () => {
    const stockList = useSelector((state) => state.stocks.value);
    const limitedData = stockList.slice(0, 150);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchStockLists());
    }, [dispatch])

    return(
        <>
        <Navigation />
        <div className="stockWrap">
            <h3>Stock Market</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Exchange</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {limitedData.map((item, index) =>(
                        <DisplayStocks 
                          key={index}
                          sSymbol={item.symbol}
                          sName={item.name}
                          sPrice={item.price}
                          sExchange={item.exchange}
                        />
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Stocks;