import React, { Component } from 'react';
import S_tip from './../../../img/success.png';
class SuccessTip extends Component {

    render() {
        return (
            <div className="S_tip">
                <img src={S_tip} alt='' className='icon_success'/>
                <p className='psd_suc'>密码修改成功</p>
            </div>
        );
    }

}

export default SuccessTip;
