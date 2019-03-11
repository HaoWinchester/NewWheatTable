import React, { Component } from 'react';
import PayOrderTitle from './PayOrderTitle';
import PayOrderInfo from './PayOrderInfo';
import PayOrderFoot from './PayOrderFoot';
import './index.css';
class PayOrder extends Component {

    render() {
        return (
            <div className="PayOrderList">
                <PayOrderTitle />
                <PayOrderInfo />
                <PayOrderFoot />
            </div>
        );
    }

}

export default PayOrder;
