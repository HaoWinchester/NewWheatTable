import React, { Component } from 'react';
import  './index.css';
import icon_close from './../../img/icon_close.png';
import Password from './Password';
import Logo from './../logo';
class PsdLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'注册账号',
            num:'',
            FirstTip:'hidden',
            FirstTipColor:'#333',
            code:false,
            password:true,
            register:false,
            backpsd:false,
            policy:false,
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
    ChangeCode = ()=>{
        window.location.href='./CodeLogin'
    }
    ChangeToBackPsd = ()=>{
        window.location.href='./GetBackPsd'
    }
    rightLogin = ()=>{
        
    }
    render() {
        let {num,FirstTip,FirstTipColor,password} = this.state;
        return (
            <div className="wrap">
                <h2 className="login_title">账号密码登录</h2>
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
                    {
                        password&&<Password onChangCode={()=>this.ChangeCode()}
                                  ChangeToBackPsd={()=>this.ChangeToBackPsd()}
                                  rightLogin={()=>this.rightLogin()}
                        />
                    }
                </div>
                <Logo />
            </div>
        );
    }

}

export default PsdLogin;