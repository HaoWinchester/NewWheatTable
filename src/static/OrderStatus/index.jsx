import React, { Component } from 'react';
import CommonInfo from './CommonInfo';
import HaveToPay from './HaveToPay';
import YetToPay from './YetToPay';
import HaveToCancel from './HaveToCancel';
import $ from 'jquery';
import './index.css';
class OrderStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            havetopay : false,
            yettopay : false,
            havetocancel:true
        };
    }
    componentDidMount() {
        $('body').css('background','rgba(244,245,249,1)')
    }
    render() {
        let {havetopay,yettopay,havetocancel} = this.state;
        return (
            <div style={{background:'rgba(244,245,249,1)',overflow:'hidden'}}>
                {
                    havetopay&&<div><p className="PayTimeTip Mtop">
                                <span style={{color:'#1CDA72',fontSize:'15px'}}>已支付</span>
                                <span style={{color:'#999',fontSize:'12px'}}>（您已经完成了付款，点击前往班级上课吧！）</span>
                            </p>
                            <CommonInfo />
                            <HaveToPay />
                            </div>
                }
                {
                    yettopay&&<div><p className="PayTimeTip Mtop">
                                <span style={{color:'#FF4E4E',fontSize:'15px'}}>待支付</span>
                                <span style={{color:'#999',fontSize:'12px'}}>（请在7：32内完成支付，否则订单取消）</span>
                            </p>
                            <CommonInfo />
                            <YetToPay />
                            </div>
                }
                {
                    havetocancel&&<div><p className="PayTimeTip Mtop">
                                <span style={{color:'#999',fontSize:'15px'}}>已取消</span>
                            </p>
                            <CommonInfo />
                            <HaveToCancel />
                            </div>
                }
            </div>
        );
    }

}

export default OrderStatus;
