import React, { Component } from 'react';
import  './index.css';
import icon_close from './../../img/icon_close.png';
import BackPsd from './BackPsd';
class GetBackPsd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'注册账号',
            num:'',
            FirstTip:'hidden',
            FirstTipColor:'#333',
            code:false,
            registagreement:false
        };
    }

    // 立即进入
    rightLogin = ()=>{
        this.PhoneNumOnBlur(this.state.num)
    }
    ChangePhoneNum = (e)=>{
        console.log();
        this.setState({
            num : e.target.value
        });
    }
    PhoneNumOnBlur = (e)=>{
        // const phonenum = e.target.value;
        if(!(/^1[34578]\d{9}$/.test(e))){
            this.setState({
                FirstTip : 'visible',
                FirstTipColor:'#FF4D4D'
            });
        }else{
            this.setState({
                FirstTip : 'hidden',
                FirstTipColor:'#333'
            });
        }
    }
    ChangePassword =()=>{
        this.setState({
            code:false,
            password:true,
            register:false,
            title:'账号密码登录'
        });
    }
    ChangeCode = ()=>{
        this.setState({
            code:true,
            password:false,
            register:false,
            title:'手机验证码登录'
        });
    }
    ChangeRegister = ()=>{
        this.setState({
            code:false,
            password:false,
            register:true,
            title:'注册账号'
        });
    }
    ChangeToBackPsd = ()=>{
        this.setState({
            code:false,
            password:false,
            register:false,
            backpsd:true,
            title:'找回密码'
        });
    }
    OpenPolicy = ()=>{
        this.setState({
            policy : true
        });
    }
    OpenRegistAgree = ()=>{
        this.setState({
            registagreement : true
        });
    }
    ClosePolicy = ()=>{
        this.setState({
            policy : false
        });
    }
    CloseRegistAgree = ()=>{
        this.setState({
            registagreement : false
        });
    }
    render() {
        let {num,FirstTip,FirstTipColor} = this.state;
        return (
            <div className="wrap">
                <h2 className="login_title">找回密码</h2>
                <div style={{ marginBottom: 16 }}>
                    <div className='tip'>验证码:</div>
                    <div className="phoneNum" style={{borderColor:FirstTipColor}}>
                        <span className="numLeft">+86</span>
                        <input type="text"
                            placeholder="请输入11位数手机号"
                            className="input_phone"
                            maxLength={11}
                            value={num}
                            onChange={(e)=>this.ChangePhoneNum(e)}

                            />
                        <img src={icon_close} alt="" className='icon_close'/>
                    </div>
                    <p className="warn_tip" style={{visibility: FirstTip }}>手机号码格式错误!</p>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <BackPsd />
                </div>
            </div>
        );
    }

}

export default GetBackPsd;
