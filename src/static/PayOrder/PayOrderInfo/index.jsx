import React, { Component } from 'react';
import Video from './../../../img/video.png';
import Table from './../../../img/table.png';
import HourG from './../../../img/zhongya.png';
import Student from './../../../img/student.png';
import Icon_check from './../../../img/icon_check.png';
import Icon_checked from './../../../img/icon_checked.png';
import $ from 'jquery';
class PayOrderInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AgreeStatus : false
        };
    }
    componentDidMount() {
        $("body").css('background','rgba(244,245,249,1)')
    }
    ChangeAgree = ()=>{
        this.setState({
            AgreeStatus : !this.state.AgreeStatus
        });
    }
    render() {
        let {AgreeStatus} = this.state;
        return (
            <div style={{marginBottom:'60px'}}>
                <div className="CourseTitle" style={{marginTop:'10px'}}>
                    <div className="CourseName">
                        <span className="BoldTitle">英语特惠期，即报即学[开学季]</span>
                    </div>
                    <div className="CourseTxt">报班即学，家长眼中最好的语文课程，一门课让孩子爱上语文！</div>
                    <div className="CourseBottom">
                        <span>
                            <img src={Table} alt="" className="icon_date"/>
                            <span className='BottomTime'>课时数：</span><span className="BottomInfo">541课时</span>
                        </span>
                        <span style={{float:'right'}}>
                            <img src={Video} alt="" className="icon_video"/>
                            <span className='BottomTime'>授课模式：</span><span className="BottomInfo">直播+录播课</span>
                        </span>
                    </div>
                    <div className="CourseBottom">
                        <span style={{width:'100%'}}>
                            <img src={Student} alt="" className="icon_date"/>
                            <span className='BottomTime'>适合年级：</span><span className="BottomInfo">一年级/二年级/三年级</span>
                        </span>
                    </div>
                    <div className="CourseBottom">
                        <span style={{width:'100%'}}>
                            <img src={HourG} alt="" className="icon_date"/>
                            <span className='BottomTime'>有效期：</span><span className="BottomInfo">报班即学，有效期123天</span>
                        </span>
                    </div>
                    <div className="trait">
                        <span>系统化学习</span>
                        <span>24H内答疑</span>
                        <span>作业批改</span>
                        <span>资料下载</span>
                        <span>全程监督</span>
                    </div>
                </div>
                <div className="PayOrderMoney">
                    <div className="PayOrderMoneyList">
                        <span>订单总额</span>
                        <span style={{float:'right'}}>￥3444</span>
                    </div>
                    <div className="PayOrderMoneyList">
                        <span>优惠活动</span>
                        <span style={{float:'right'}}>9折</span>
                    </div>
                    <div className="PayOrderMoneyList">
                        <span>应付金额</span>
                        <span style={{float:'right',color:'#FF4E4E'}}>￥3444</span>
                    </div>
                </div>
                <div className='AgreePolicy'>
                    <img src={AgreeStatus?Icon_checked:Icon_check} alt="" className="icon_check" onClick={()=>this.ChangeAgree()}/>
                    我已阅读并同意<span style={{color:'#1CDA72'}}>《售后政策》</span>
                </div>
            </div>
        );
    }

}

export default PayOrderInfo;
