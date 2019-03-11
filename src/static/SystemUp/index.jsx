import React, { Component } from 'react';
import Up from './../../img/Up.png';
import $ from 'jquery';
import './index.css';
import Code from './../../img/code.png';
class SystemUp extends Component {
    componentDidMount() {
        $('body').css('background','rgba(244,245,249,1)')
    }
    render() {
        return (
            <div>
                <img src={Up} alt="" className='Up'/>
                <div className="CourseDetails" style={{background:'none'}}>
                    <p className="CourseDetailTitle"><span className="shu"></span>开课流程</p>
                    <p className="DetailTxt">1.添加客服微信 </p>
                    <p className="DetailTxt">2.客服会提供沪江网校app下载和沪江网校网址</p>
                    <p className="DetailTxt"> 3.通过上述两种途径，使用下单的手机号注册沪江网校</p>
                    <p className="DetailTxt"> 4.完整注册后联系客服，预约开课 </p>
                    <p className="PayNormal">（若已有沪江账号，可以直接联系客服预约开课）</p>
                    <img src={Code} alt="" className="ErCode"/>
                    <p className="PayNormal">长按识别二维码，添加专属客服</p>
                    <div className="LookOrder">返回主页</div>
                </div>
            </div>
        );
    }

}

export default SystemUp;
