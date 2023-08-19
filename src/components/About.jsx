import React from 'react';// eslint-disable-line no-undef, no-unused-vars
import Navigation from './OtherNav';

const About = () => {
    return (
        <>
        <Navigation />
        <div className="wrap">
            <h3>About The Project</h3>
            <p>This is a simple project that uses react hook and redux to fetch financial data from an open API - Free Stock Market.<br/> The home page shows the card to display financial statement list, the stock market, and about project. Credit to Nelson Sakwa on Behance for the UI layout</p>
            <p>In the financial list page, you have list of financial statements you can filter and get details of a statement by click on it. Please, note that the free subscription of the API gives limited access i.e there are some statment that will return no data.</p>
        </div>
        </>
    );
}

export default About;