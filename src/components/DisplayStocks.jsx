import React from 'react';
import PropTypes from 'prop-types';

function DisplayStocks({ sSymbol, sName, sPrice, sExchange }) {
    return <tr>
                <td>{sName}</td>
                <td>{sSymbol}</td>
                <td>{sExchange}</td>
                <td>{sPrice}</td>
            </tr>
}

DisplayStocks.propTypes = {
    sName: PropTypes.string.isRequired,
    sSymbol: PropTypes.string.isRequired,
    sExchange: PropTypes.string.isRequired,
    sPrice: PropTypes.number.isRequired
}

export default DisplayStocks;