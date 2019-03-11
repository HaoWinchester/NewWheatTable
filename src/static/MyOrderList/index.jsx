import React, { Component } from 'react';
import MyOrderHeader from './MyOrderHeader';
import MyOrderStatus from './MyOrderStatus';
import MyOrderListContent from './MyOrderListContent';
import CancelOrder from './CancelOrder';
import CancelSuccessTip from './CancelSuccessTip';
import NoneOrder from './NoneOrder';
import $ from 'jquery';
import './index.css';
class MyOrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cancelStatus : false,    //取消弹窗
            cancelSuccess : false,   //取消成功
            HaveOrder : false,      //true：有订单  false:无订单
            type:1
        };
    }
    componentDidMount() {
        $("body").css('background','rgba(244,245,249,1)')
    }
    CancelOrder = ()=>{
        this.setState({
            cancelStatus : true,
            type : 1
        });
    }
    CancelOrderBtn = ()=>{
        this.setState({
            cancelStatus : false,
        });
    }
    MakseSureBtn = ()=>{
        this.setState({
            cancelStatus :false,
            cancelSuccess : true
        },()=>{
            setTimeout(()=>{
                this.setState({
                    cancelSuccess : false
                });
            },3000);
        });

    }
    PayAgain = ()=>{
        this.setState({
            cancelStatus : true,
            type : 2
        });
    }
    render() {
        let {cancelStatus,cancelSuccess,type,HaveOrder} = this.state;
        return (
            <div>
                <MyOrderHeader />
                <MyOrderStatus />
                {
                    HaveOrder?<MyOrderListContent
                        CancelOrders = {()=>this.CancelOrder()}
                        PayAgain = {()=>this.PayAgain()}
                    />:<NoneOrder />
                }

                {
                    cancelStatus&&<CancelOrder
                        CancelOrderBtn = {()=>this.CancelOrderBtn()}
                        MakseSureBtn = {()=>this.MakseSureBtn()}
                        type = {type}
                    />
                }
                {
                    cancelSuccess&&<div className="tipalert"><CancelSuccessTip /></div>
                }

            </div>
        );
    }

}

export default MyOrderList;
