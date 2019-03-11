import React, { Component } from 'react';
import paysuccess from './../../../img/PaySuccess.png';
class PaySuccess extends Component {

    render() {
        return (
            <div className="PaySuccess">
                <img src={paysuccess} alt="" className='icon_successs'/>
                <p className="PayNormal">支付方式：微信支付</p>
                <p className="PayNormal">支付金额：<span style={{color: '#FF4D4D'}}>￥1444</span></p>
                <p className="PayNormal">支付时间：2019-3-1</p>
                <p className="PaySuccessTxt">支付成功！</p>
            </div>
        );
    }

}

export default PaySuccess;
