import React, { Component } from 'react';
import Icon_check from './../../../img/icon_check.png';
import Icon_checked from './../../../img/icon_checked.png';
import WechatPay from './../../../img/wechatPay.png';
class PayWays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AgreeStatus : false
        };
    }
    ChangeAgree = ()=>{
        this.setState({
            AgreeStatus : !this.state.AgreeStatus
        });
    }
    render() {
        let {AgreeStatus} = this.state;
        return (
            <div className="PayOrderMoney">
                <div className="PayOrderMoneyList">
                    <span>支付方式：</span>
                </div>
                <div className="PayOrderMoneyList" style={{margin:0}}>
                    <span><img src={WechatPay} alt="" className="icon_wechat"/>微信支付</span>
                    <span style={{float:'right'}} onClick={()=>this.ChangeAgree()}><img src={AgreeStatus?Icon_checked:Icon_check} alt="" className="icon_check"/></span>
                </div>
            </div>
        );
    }

}

export default PayWays;
