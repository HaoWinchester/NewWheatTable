import React, { Component } from 'react';
import PaySuccess from './PaySuccess';
import PayFails from './PayFails';
import SignUp from './SignUp';
import PaySuccessWord from './PaySuccessWord';
import './index.css';
class PayResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SuccessOrFail : true,  //true: 支付成功 ；false:支付失败
            SuccessOrSign : true,   //true: 支付成功 ；false:报名成功
        };
    }
    render() {
        let {SuccessOrSign,SuccessOrFail} = this.state;
        return (
            <div style={{background:'rgba(244,245,249,1)',overflow:'hidden'}}>
                {
                    SuccessOrFail?<div>{
                        SuccessOrSign?<PaySuccess />:<SignUp />
                    }
                    <PaySuccessWord /></div>:<PayFails />
                }
            </div>
        );
    }

}

export default PayResults;
