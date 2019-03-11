import React, { Component } from 'react';

class Password extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            SecondTip:'hidden',
            SecondTipColor:'#333',
            getCode : true,
            time : 60
        };
    }
    render() {
        let {SecondTipColor,SecondTip}=this.state;
        return (
            <div>
                <div className='tip'>密码:</div>
                <div className="phoneNum" style={{borderColor:SecondTipColor}}>
                    <input type="text" placeholder="请输入密码" className="input_phone" maxLength={11}/>
                </div>
                <p className="warn_tip" style={{visibility:SecondTip}}>密码输入有误，请重新输入!</p>
                <div className="rightIn" onClick={()=>this.props.rightLogin()}>
                    立即进入
                </div>
                <div>
                    <span className="psd_login" onClick={()=>{this.props.onChangCode()}}>
                        验证码登录
                    </span>
                    <span className="NewCounter" onClick={()=>this.props.ChangeToBackPsd()}>
                        忘记密码
                    </span>
                </div>
            </div>
        );
    }

}

export default Password;
