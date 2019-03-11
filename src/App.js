import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import FirstLogin from './static/login/FirstLogin';
import HomePage from './static/HomePage';
import Login from './static/login';
import MyOrderList from './static/MyOrderList';
import CourseInfo from './static/CourseInfo';
import PayOrder from './static/PayOrder';
import CheckStand from './static/CheckStand';
import PayResults from './static/PayResults';    //支付状态
import OrderStatus from './static/OrderStatus';  //订单状态
import SystemUp from './static/SystemUp';    //系统升级
import PsdLogin from './static/PsdLogin';    //密码登录
import CodeLogin from './static/CodeLogin';  //验证码登录
import GetBackPsd from './static/GetBackPsd';  //找回密码
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
           <Router>
                <Switch>
                    <Route exact path="/" component={FirstLogin}></Route>
                    <Route  path="/Login" component={Login}></Route>
                    <Route  path="/PsdLogin" component={PsdLogin}></Route>
                    <Route  path="/HomePage" component={HomePage}></Route>
                    <Route  path="/MyOrderList" component={MyOrderList}></Route>
                    <Route  path="/CourseInfo" component={CourseInfo}></Route>
                    <Route  path="/PayOrder" component={PayOrder}></Route>
                    <Route  path="/CheckStand" component={CheckStand}></Route>
                    <Route  path="/PayResults" component={PayResults}></Route>
                    <Route  path="/OrderStatus" component={OrderStatus}></Route>
                    <Route  path="/SystemUp" component={SystemUp}></Route>
                    <Route  path="/CodeLogin" component={CodeLogin}></Route>
                    <Route  path="/GetBackPsd" component={GetBackPsd}></Route>
                </Switch>
           </Router>
      </div>
    );
  }
}

export default App;
