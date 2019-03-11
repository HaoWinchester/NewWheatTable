import React, { Component } from 'react';
import paysuccess from './../../../img/PaySuccess.png';
class SignUp extends Component {

    render() {
        return (
            <div className="PaySuccess">
                <img src={paysuccess} alt="" className='icon_successs'/>
                <p className="PaySuccessTxt">报名成功！</p>
            </div>
        );
    }

}

export default SignUp;
