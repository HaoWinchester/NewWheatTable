import React, { Component } from 'react';
import logo from './../../../img/logo.png';
class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OrLogin : false
        };
    }
    render() {
        let {OrLogin} = this.state;
        return (
            <div className="home-header">
                <img src={logo} alt='' className="header-logo"/>
                {
                    OrLogin?<img src='http://pic.58pic.com/58pic/15/68/59/71X58PICNjx_1024.jpg' alt="" className="user-logo"/>:
                    <span className="login_btn">登录</span>
                }
            </div>
        );
    }

}

export default HomeHeader;
