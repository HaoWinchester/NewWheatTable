import React, { Component } from 'react';
import Logo from './../../img/logo.png';
import './index.css';
class logo extends Component {

    render() {
        return (
            <div className="footer">
                <img src={Logo} alt="" className="logo" />
                <p className="CompanyName">上海佳课教育科技有限公司</p>
            </div>
        );
    }

}

export default logo;
