import React, { Component } from 'react';

class CourseInfoStatus extends Component {

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
        const orderstatus = ['课程介绍','课题大纲','咨询'];
        let order = orderstatus.map((data,index)=>{
            // eslint-disable-next-line
            if(orderindex==index){
                return(
                    <span key={index} onClick={()=>this.OrdersStatus(index)} className='CourseStatusActive'>
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
            <div className="CourseStatus">
                {order}
            </div>
        );
    }

}

export default CourseInfoStatus;
