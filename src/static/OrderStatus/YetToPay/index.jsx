import React, { Component } from 'react';

class YetToPay extends Component {

    render() {
        return (
            <div className="HavePay">
                <div className="PayOrderMoney">
                    <div className="PayOrderMoneyList MNone">
                        <span>订单总额</span>
                        <span style={{float:'right'}}>￥3444</span>
                    </div>
                    <div className="PayOrderMoneyList MNone">
                        <span>优惠活动</span>
                        <span style={{float:'right',color:'#FF4E4E'}}>9折</span>
                    </div>
                    <div className="PayOrderMoneyList MNone">
                        <span>应付金额</span>
                        <span style={{float:'right',color:'#FF4E4E'}}>￥3444</span>
                    </div>
                    <p className="OrderTitle_t MNone">订单信息</p>
                    <div className="PayOrderMoneyList MNone">
                        <span>订单编号：</span>
                        <span style={{float:'right'}}>1222222222222</span>
                    </div>
                    <div className="PayOrderMoneyList MNone">
                        <span>下单时间：</span>
                        <span style={{float:'right'}}>2019-2-1</span>
                    </div>
                </div>
                <div className="MyOrderBottom">
                    <div className="BackBuyLesson">立即付款</div>
                </div>
            </div>
        );
    }

}

export default YetToPay;
