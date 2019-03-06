import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import Screen from './Screen';
import HomeContent from './HomeContent';
import HomeBottom from './HomeBottom';
import './index.css';
class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <Screen />
                <HomeContent />
                <HomeBottom />
            </div>
        );
    }

}

export default HomePage;
