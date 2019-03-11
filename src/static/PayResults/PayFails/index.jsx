import React, { Component } from 'react';
import PayFail from './../../../img/PayFail.png';
class PayFails extends Component {

    render() {
        return (
            <div style={{background:'rgba(244,245,249,1)',overflow:'hidden',minHeight:'100vh'}}>
                <div className="PaySuccess">
                    <img src={PayFail} alt="" className='icon_fail'/>
                    <p className="PaySuccessTxt">抱歉，支付失败！</p>
                    <p className="PayNormal" style={{marginBottom:'50px'}}>可能是网络延迟，不要急，你可以重新支付</p>
                </div>
                <div className="LookOrder" style={{marginTop:'60px'}}>重新支付</div>
            </div>
        );
    }

}

export default PayFails;
