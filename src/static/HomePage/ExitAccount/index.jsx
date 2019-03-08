import React, { Component } from 'react';
import Icon_cha from './../../../img/icon_cha.png';
class ExitAccount extends Component {

    render() {
        return (
            <div className="EditAccount">
                <div className="ExitAccountTip">
                    <div style={{overflow:'hidden'}}>
                        <img src='http://img3.imgtn.bdimg.com/it/u=1986179278,1118313821&fm=26&gp=0.jpg' alt="" className="exit-logo"/>
                        <span className='UserNum'>
                            18333332222
                        </span>
                        <span className="ExitBtn">退出账号</span>
                    </div>
                    <p className="MyOrderList">我的订单</p>
                </div>
                <img src={Icon_cha} alt="" className="icon_cha" onClick={()=>this.props.CloseExit()}/>
            </div>
        );
    }

}

export default ExitAccount;
