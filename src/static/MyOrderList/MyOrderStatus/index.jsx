import React, { Component } from 'react';

class MyOrderStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderindex : 0
        };
    }
    OrdersStatus = (index)=>{
        this.setState({
            orderindex : index
        });
    }
    render() {
        let {orderindex} = this.state;
        const orderstatus = ['全部订单','待支付','已支付','已取消'];
        let order = orderstatus.map((data,index)=>{
            // eslint-disable-next-line
            if(orderindex==index){
                return(
                    <span key={index} onClick={()=>this.OrdersStatus(index)} className='MyStatusActive'>
                        {data}
                    </span>
                )
            }else{
                return(
                    <span key={index} onClick={()=>this.OrdersStatus(index)}>
                        {data}
                    </span>
                )
            }
        })
        return (
            <div className="MyStatus">
                {order}
            </div>
        );
    }

}

export default MyOrderStatus;
