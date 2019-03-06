import React, { Component } from 'react';
import circlu from './../../../img/circlu.png';
class Screen extends Component {

    render() {
        return (
            <div className="Screen_list">
                筛选：
                <span className="Screen_ways">年级<img src={circlu} alt="" className="icon_circlu"/></span>
                <span className="Screen_ways">科目<img src={circlu} alt="" className="icon_circlu"/></span>
            </div>
        );
    }

}

export default Screen;
