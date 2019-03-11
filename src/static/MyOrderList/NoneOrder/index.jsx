import React, { Component } from 'react';
import Empty from './../../../img/empty.png';
class NoneOrder extends Component {

    render() {
        return (
            <div>
                <img src={Empty} alt="" className="NoneOrder"/>
                <p className="PayNormal">目前没有任何订单哦！</p>
                <div className='right_register' onClick={()=>this.RightRegister()}>前往购课</div>
            </div>
        );
    }

}

export default NoneOrder;
