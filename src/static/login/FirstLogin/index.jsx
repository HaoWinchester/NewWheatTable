import React, { Component } from 'react';
import register from './../../../img/register.png';
import Policy from './../Policy';
import RegistAgreement from './../RegistAgreement';
import Logo from './../../logo';
import './index.css';
class FirstLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            policy : false,
            registagreement : false
        };
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
    RightRegister = ()=>{
        window.location.href="./Login"
    }
    render() {
        let {registagreement,policy} = this.state;
        return (
            <div>
                <img src={register} alt='' className="Defaultimg"/>
                <p className='registerTip' style={{marginTop:50}}>该手机号并未注册过新麦教育,</p>
                <p className='registerTip'>我们可以现在立即为您注册。</p>
                <div className='right_register' onClick={()=>this.RightRegister()}>立即注册</div>
                <p style={{marginTop:40,fontSize:12,textAlign:'center'}}>
                    注册表示同意<span className="register_book" onClick={()=>this.OpenPolicy()}>《用户注册协议》</span>与<span className="register_book" onClick={()=>this.OpenRegistAgree()}>《用户隐私政策》</span>
                </p>
                {policy&&<Policy ClosePolicy={()=>this.ClosePolicy()}/>}
                {registagreement&&<RegistAgreement CloseRegistAgree={()=>this.CloseRegistAgree()}/>}
                <Logo />
            </div>
        );
    }

}

export default FirstLogin;
