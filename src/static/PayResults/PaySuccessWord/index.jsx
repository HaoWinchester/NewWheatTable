import React, { Component } from 'react';
import Code from './../../../img/code.png';

class PaySuccessWord extends Component {

    render() {
        return (
            <div className="CourseDetails" style={{background:'none'}}>
                <p className="CourseDetailTitle"><span className="shu"></span>开课流程</p>
                <p className="DetailTxt">1.添加客服微信 </p>
                <p className="DetailTxt">2.客服会提供沪江网校app下载和沪江网校网址</p>
                <p className="DetailTxt"> 3.通过上述两种途径，使用下单的手机号注册沪江网校</p>
                <p className="DetailTxt"> 4.完整注册后联系客服，预约开课 </p>
                <p className="PayNormal">（若已有沪江账号，可以直接联系客服预约开课）</p>
                <img src={Code} alt="" className="ErCode"/>
                <p className="PayNormal">长按识别二维码，添加专属客服</p>
                <div className="LookOrder">查看订单</div>
            </div>
        );
    }

}

export default PaySuccessWord;
