import React, { Component } from 'react';
import Logo from './../../../img/logo.png';
class HomeBottom extends Component {

    render() {
        return (
            <div className="HomeBottom">
                <img src={Logo} alt="" className="BottomLogo"/>
                <p className="HomePropaganda">新麦教育依托沪江悠久的互联网教育行业经验，为家长及学生提供优质的亲子、幼儿、中小学，全学科及素质类的互联网学习产品和服务。</p>
                <p className="BottomName">上海佳课教育科技有限公司</p>
            </div>
        );
    }

}

export default HomeBottom;
