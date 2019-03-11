import React, { Component } from 'react';
import CheckStandTitle from './CheckStandTitle';
import PayWays from './PayWays';
import './index.css';
import $ from 'jquery';
class CheckStand extends Component {
    componentDidMount() {
        $("body").css('background','rgba(244,245,249,1)')
    }
    render() {
        return (
            <div className="PayOrderList">
                <CheckStandTitle />
                <PayWays />
                <div className="rightPay">
                    立即支付
                </div>
            </div>
        );
    }

}

export default CheckStand;
