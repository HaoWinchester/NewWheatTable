import React, { Component } from 'react';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SecondTip:'hidden',
            SecondTipColor:'#333',
            getCode : true,
            time : 60
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
    render() {
        let {SecondTipColor,SecondTip,getCode,time}=this.state;
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
                <p style={{marginTop:40,fontSize:12}}>
                    注册表示同意<span className="register_book" onClick={()=>this.props.OpenPolicy()}>《用户注册协议》</span>与<span className="register_book" onClick={()=>this.props.OpenRegistAgree()}>《用户隐私政策》</span>
                </p>
                <div className="rightIn" onClick={()=>this.props.rightLogin()} style={{marginTop:0}}>
                    立即注册
                </div>
                <div className="register_count">
                    已有账号，<span className="fref" onClick={()=>this.props.onChangePassword()}>去登录</span>
                </div>

            </div>
        );
    }

}

export default Register;
