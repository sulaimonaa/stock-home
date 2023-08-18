import PropTYpes from 'prop-types';

const CompanyStatements = ({cName, cPrice, cSymbol, cChange, cChangesPercentage, dLow, dHigh, yLow, yHigh, cExchange, cOpen, cPreviousClose}) => {
    return (
        <li>
            <div data-testid="company-name">Company Name: {cName}</div>
            <div>Price: {cPrice}</div>
            <div>Symbol: {cSymbol}</div>
            <div>Current Change: {cChange}</div>
            <div>Current Change Percentage: {cChangesPercentage}</div>
            <div>Day Low: {dLow}</div>
            <div>Day High: {dHigh}</div>
            <div>Year Low: {yLow}</div>
            <div>Year High: {yHigh}</div>
            <div>Exchange: {cExchange}</div>
            <div>Open: {cOpen}</div>
            <div>Previous Close: {cPreviousClose}</div>
        </li>
    );
}


CompanyStatements.propTypes = {
    cName: PropTYpes.string.isRequired,
    cPrice: PropTYpes.number.isRequired,
    cSymbol: PropTYpes.string.isRequired,
    cChange: PropTYpes.number.isRequired,
    cChangesPercentage: PropTYpes.number.isRequired,
    dLow: PropTYpes.number.isRequired,
    dHigh: PropTYpes.number.isRequired,
    yLow: PropTYpes.number.isRequired,
    yHigh: PropTYpes.number.isRequired,
    cExchange: PropTYpes.string.isRequired,
    cOpen: PropTYpes.number.isRequired,
    cPreviousClose: PropTYpes.number.isRequired
}

export default CompanyStatements;