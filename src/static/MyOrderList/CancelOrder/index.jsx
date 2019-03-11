import React, { Component } from 'react';
import Cancel_fork from './../../../img/Cancel_fork.png';
class CancelOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CancelOpert : false,
            PayAgain : false,
        };
    }
    componentDidMount() {
        const type = this.props.type;
        console.log(type);
        // eslint-disable-next-line
        if(type==1){
            this.setState({
                CancelOpert : true
            });
        // eslint-disable-next-line
        }else if (type==2){
            this.setState({
                PayAgain : true
            });
        }
    }
    render() {
        let {CancelOpert,PayAgain} = this.state;
        return (
            <div className="CancelOrderBg">
                <div className="CancelOrderTip">
                    <img src={Cancel_fork} alt="" className="Cancel_fork" onClick={()=>this.props.CancelOrderBtn()}/>
                    {
                        CancelOpert&&<div>
                            <p className='CancelTip'>确定要取消订单</p>
                            <div className="CancelBtn">
                                <div>
                                    <span className="CanBtn" onClick={()=>this.props.CancelOrderBtn()}>取消</span>
                                </div>
                                <div>
                                    <span className="SureBtn" onClick={()=>this.props.MakseSureBtn()}>确定</span>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        PayAgain&&<div>
                            <p className='CancelTip'>抱歉，改课程已下架。</p>
                            <div className="LookMoreCourse">
                                查看更多优质课程
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }

}

export default CancelOrder;
