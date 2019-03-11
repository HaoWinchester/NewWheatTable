import React, { Component } from 'react';

class HaveToCancel extends Component {

    render() {
        return (
            <div className="HavePay">
                <div className="PayOrderMoney">
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
                    <div className="BackBuyLesson">重新下单</div>
                </div>
            </div>
        );
    }

}

export default HaveToCancel;
