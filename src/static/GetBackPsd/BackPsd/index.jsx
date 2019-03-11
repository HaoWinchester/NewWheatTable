import React, { Component } from 'react';
import SuccessTip from './../SuccessTip';
class BackPsd extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            SecondTip:'hidden',
            SecondTipColor:'#333',
            getCode : true,
            time : 60,
            Tipalert:false
        };
    }
    // 获取验证码倒计时
    handleGetCode = ()=>{
        let time = this.state.time;
        this.setState({
            getCode : false
        });
        let a = setInterval(()=>{
            // eslint-disable-next-line
            if(time==0){
                clearInterval(a);
                this.setState({
                    getCode : true
                });
            }else{
                time--;
                this.setState({
                    time : time
                });
            }
        },100)
    }
    MakeSureRegister = ()=>{
        this.setState({
            Tipalert : true
        },()=>{
            setTimeout(()=>{
                this.setState({
                    Tipalert : false
                });
            },3000);
        });
    }
    render() {
        let {SecondTipColor,SecondTip,getCode,time,Tipalert}=this.state;
        return (
            <div>
                <div className='tip'>验证码:</div>
                <div className="phoneNum" style={{borderColor:SecondTipColor}}>
                    <input type="text" placeholder="请输入手机验证码" className="input_phone" maxLength={11}/>
                    {
                        getCode?<span className="getCode" onClick={()=>{this.handleGetCode()}}>获取验证码</span>:<span className="timecount">{time}s</span>
                    }
                </div>
                <p className="warn_tip" style={{visibility:SecondTip}}>验证码输入有误，请重新输入!</p>
                <div className='tip'>密码:</div>
                <div className="phoneNum" style={{borderColor:SecondTipColor, marginBottom: 16 }}>
                    <input type="text" placeholder="请输入密码" className="input_phone" maxLength={11}/>
                </div>
                <div className='tip'>确认密码:</div>
                <div className="phoneNum" style={{borderColor:SecondTipColor, marginBottom: 16 }}>
                    <input type="text" placeholder="请再次输入密码" className="input_phone" maxLength={11}/>
                </div>
                <div className="rightIn" onClick={()=>this.MakeSureRegister()}>
                    确定
                </div>
                {
                    Tipalert&&<div className="tipalert"><SuccessTip /></div>
                }
            </div>
        );
    }

}

export default BackPsd;
