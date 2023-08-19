import React, { useEffect, useState } from 'react'; // eslint-disable-line no-undef, no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import { FetchFinancialStatements } from '../redux/financialStatementSlice';
import FinancialStatementList from './FinancialStatementList';
import { mapFinancialToValue } from './FinancialMapping';
import Navigation from './OtherNav';
import '../styles/financiallist.css';

const FinancialStatement = () => {
  const dispatch = useDispatch();
  const financialList = useSelector((state) => state.financialstatements.value);

  const filterAlphabetic = (dataList) => {
    return dataList.filter(item => /^[a-zA-Z]/.test(item));
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    dispatch(FetchFinancialStatements());
  }, [dispatch]);

  useEffect(() => {
    const filteredData = filterAlphabetic(financialList);
    const limitedData = filteredData.slice(0, 5000);

    const filtered = limitedData.filter((stock) =>
      mapFinancialToValue(stock).toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedData(filtered);
  }, [financialList, searchTerm]);

  return (
    <>
    <Navigation />
    <div className='wrap'>
      <h1 className='list-h1'>Financial statements list</h1>
      <input className='search' value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search Company by symbol' />
      <ul>
        {searchedData.map((list, index) => (
          <FinancialStatementList key={index} id={index + 1} symbolName={mapFinancialToValue(list)} />
        ))}
      </ul>
    </div>
    </>
  );
};

export default FinancialStatement;