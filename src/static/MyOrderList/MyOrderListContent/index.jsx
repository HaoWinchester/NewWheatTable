import React, { Component } from 'react';
const orderList = [
    {
        type:'1',//1.待支付，2已支付，3已取消
        imgUrl:'http://pic.58pic.com/58pic/15/68/59/71X58PICNjx_1024.jpg',
        title:'中小学生西班牙语特训营',
        limitTime:'20课时，有效期2个月',
        newprice:'1444',
        oldprice:'4444',
        discount:'9',
        orderNum:'123213213213',
        placeOrderTime:'2018-01-02'
    },
    {
        type:'2',//1.待支付，2已支付，3已取消
        imgUrl:'http://pic.58pic.com/58pic/15/68/59/71X58PICNjx_1024.jpg',
        title:'中小学生西班牙语特训营',
        limitTime:'20课时，有效期2个月',
        newprice:'1444',
        oldprice:'4444',
        discount:'9',
        orderNum:'123213213213',
        placeOrderTime:'2018-01-02'
    },{
        type:'3',//1.待支付，2已支付，3已取消
        imgUrl:'http://pic.58pic.com/58pic/15/68/59/71X58PICNjx_1024.jpg',
        title:'中小学生西班牙语特训营',
        limitTime:'20课时，有效期2个月',
        newprice:'1444',
        oldprice:'4444',
        discount:'9',
        orderNum:'123213213213',
        placeOrderTime:'2018-01-02'
    }
]
class MyOrderListContent extends Component {

    render() {
        // eslint-disable-next-line
        const Content = orderList.map((data,index)=>{
            // eslint-disable-next-line
            if(data.type==1){
                return(
                    <div className="PayYet" key={index}>
                        <p className='PayYet_title'>
                            <span className="Pay_status">待支付</span>
                            <span className="Pay_tip">(请在15分钟内完成支付)</span>
                        </p>
                        <div className="CourseLi" style={{width:'100%',margin:'0px'}}>
                            <div className="CourseTop Orderspace" >
                                <div className="CourseTopLeft">
                                    <img src={data.imgUrl} alt="" className='CourseImg'/>
                                </div>
                                <div className="CourseTopRight">
                                    <p className="CourseInfo">{data.title}</p>
                                    <p className="CourseInfo">{data.limitTime}</p>
                                    <p className="CourseInfo">
                                        <span className="NowPrice">￥{data.newprice}</span>
                                        <span className="OldPrice">￥{data.oldprice}</span>
                                        <span className="timelimit">限时{data.discount}折</span>
                                    </p>
                                </div>
                            </div>
                            <div className="CourseBottom Orderspace">
                                <span>
                                    <span className='BottomTime'>订单号：</span><span className="BottomInfo">{data.orderNum}</span>
                                </span>
                                <span style={{float:'right'}}>
                                    <span className='BottomTime'>下单时间：</span><span className="BottomInfo">{data.placeOrderTime}</span>
                                </span>
                            </div>
                        </div>
                        <div>
                            <span className="NowPay">立即支付</span>

                            <span className="CancelOrder" onClick={()=>this.props.CancelOrders()}>取消订单</span>
                        </div>
                    </div>

                )
                // eslint-disable-next-line
            }else if(data.type==2){
                return(
                    <div className="PayYet"  key={index}>
                        <p className='PayYet_title'>
                            <span className="PayAlready">已支付</span>
                        </p>
                        <div className="CourseLi" style={{width:'100%',margin:'0px'}}>
                            <div className="CourseTop Orderspace" >
                                <div className="CourseTopLeft">
                                    <img src={data.imgUrl} alt="" className='CourseImg'/>
                                </div>
                                <div className="CourseTopRight">
                                    <p className="CourseInfo">{data.title}</p>
                                    <p className="CourseInfo">{data.limitTime}</p>
                                    <p className="CourseInfo">
                                        <span className="NowPrice">￥{data.newprice}</span>
                                        <span className="OldPrice">￥{data.oldprice}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="CourseBottom Orderspace">
                                <span>
                                    <span className='BottomTime'>订单号：</span><span className="BottomInfo">{data.orderNum}</span>
                                </span>
                                <span style={{float:'right'}}>
                                    <span className='BottomTime'>下单时间：</span><span className="BottomInfo">{data.placeOrderTime}</span>
                                </span>
                            </div>
                        </div>
                        <div>
                            <span className="NowListen">去上课</span>
                        </div>
                    </div>
                )
                // eslint-disable-next-line
            }else if(data.type==3){
                return(
                    <div className="PayYet"  key={index}>
                        <p className='PayYet_title'>
                            <span className="PayCancel">已取消</span>
                        </p>
                        <div className="CourseLi" style={{width:'100%',margin:'0px'}}>
                            <div className="CourseTop Orderspace" >
                                <div className="CourseTopLeft">
                                    <img src={data.imgUrl} alt="" className='CourseImg'/>
                                </div>
                                <div className="CourseTopRight">
                                    <p className="CourseInfo">{data.title}</p>
                                    <p className="CourseInfo">{data.limitTime}</p>
                                    <p className="CourseInfo">
                                        <span className="NowPrice">￥{data.newprice}</span>
                                        <span className="OldPrice">￥{data.oldprice}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="CourseBottom Orderspace">
                                <span>
                                    <span className='BottomTime'>订单号：</span><span className="BottomInfo">{data.orderNum}</span>
                                </span>
                                <span style={{float:'right'}}>
                                    <span className='BottomTime'>下单时间：</span><span className="BottomInfo">{data.placeOrderTime}</span>
                                </span>
                            </div>
                        </div>
                        <div>
                            <span className="PayAgain" onClick={()=>this.props.PayAgain()}>重新下单</span>
                        </div>
                    </div>
                )
            }
        })
        return (
            <div className='OrderList'>
                {Content}
                <p className="OrderList_tip">到底了哟！</p>
                <div className="MyOrderBottom">
                    <div className="BackBuyLesson">返回购课</div>
                </div>
            </div>
        );
    }

}

export default MyOrderListContent;
