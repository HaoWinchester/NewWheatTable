import React, { Component } from 'react';
import logo from './../../../img/logo.png';
class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OrLogin : true
        };
    }
    render() {
        let {OrLogin} = this.state;
        return (
            <div className="home-header">
                <img src={logo} alt='' className="header-logo"/>
                {
                    OrLogin?<img src='http://img3.imgtn.bdimg.com/it/u=1986179278,1118313821&fm=26&gp=0.jpg'
                            alt=""
                            className="user-logo"
                            onClick={()=>this.props.OpenExit()}
                            />:
                    <span className="login_btn">登录</span>
                }
            </div>
        );
    }

}

export default HomeHeader;
