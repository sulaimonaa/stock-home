import React, { useEffect, useState } from "react"; // eslint-disable-line no-undef, no-unused-vars
import { useParams } from "react-router-dom";
import CompanyStatements from "./CompanyStatements";
import Navigation from './OtherNav';
import '../styles/company.css';

const Company = () => {
    const {symbol} = useParams();
    const API_KEY = '2a983b252a14dce3b861a39db579c57f';
    const API_ENDPOINT = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${API_KEY}`;

    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);

        if (response.status === 403) {
            setLoading(false);
            return;
          }

        if (!response.ok) {
            setLoading(false);
            return;
          }
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false);
        } catch (error) {
          setData([]);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

    return (
    <>
    <Navigation />
    <div className="cWrap">
    <div className="cData">
    {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>API Error - Free plan is limited to US stocks only</p>
      )  : (
        <ul>
          {data.map((item, index) => (
            <CompanyStatements 
                key={index}
                cName={item.name}
                cPrice={item.price}
                cSymbol={item.symbol}
                cChange={item.change}
                cChangesPercentage={item.changesPercentage}
                dLow={item.dayLow}
                dHigh={item.dayHigh}
                yLow={item.yearLow}
                yHigh={item.yearHigh}
                cExchange={item.exchange}
                cOpen={item.open}
                cPreviousClose={item.previousClose}
            />
          ))}
        </ul>
      )}
    </div>
    </div>
    </>
    )
}

export default Company;