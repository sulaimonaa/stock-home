import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/financiallist.css';

function FinancialStatementList({ id, symbolName }) {
  return <li id={id} data-testid="financial-statement-list">
          <Link to={`/company/${symbolName}`} className='financial-list'>{symbolName}</Link>
          </li>;
}

FinancialStatementList.propTypes = {
  id: PropTypes.number.isRequired,
  symbolName: PropTypes.string.isRequired,
};

export default FinancialStatementList;
