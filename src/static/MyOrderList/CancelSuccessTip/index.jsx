import React, { Component } from 'react';
import S_tip from './../../../img/success.png';
class CancelSuccessTip extends Component {
    render() {
        return (
            <div className="S_tip">
                <img src={S_tip} alt='' className='icon_success'/>
                <p className='psd_suc'>订单取消成功</p>
            </div>
        );
    }

}

export default CancelSuccessTip;
