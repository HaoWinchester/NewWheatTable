import React, { Component } from 'react';
import MyOrderHeader from './MyOrderHeader';
import MyOrderStatus from './MyOrderStatus';
import MyOrderListContent from './MyOrderListContent';
import './index.css';
class MyOrderList extends Component {

    render() {
        return (
            <div>
                <MyOrderHeader />
                <MyOrderStatus />
                <MyOrderListContent />
            </div>
        );
    }

}

export default MyOrderList;
