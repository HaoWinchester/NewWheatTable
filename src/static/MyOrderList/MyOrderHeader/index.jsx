import React, { Component } from 'react';
import Icon_exit from './../../../img/icon_exit.png';
class MyOrderHeader extends Component {

    render() {
        return (
            <div className="MyOrderHeader">
                <img src="http://img3.imgtn.bdimg.com/it/u=1986179278,1118313821&fm=26&gp=0.jpg" alt="" className="MyOrderHeaderImg"/>
                <span className='UserNum'>123456677</span>
                <span className="exit_account">
                    <img src={Icon_exit} alt="" className="icon_text"/>
                    退出账号
                </span>
            </div>
        );
    }

}

export default MyOrderHeader;
