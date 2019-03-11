import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import FirstLogin from './static/login/FirstLogin';
import HomePage from './static/HomePage';
import Login from './static/login';
import MyOrderList from './static/MyOrderList';
import CourseInfo from './static/CourseInfo';
import PayOrder from './static/PayOrder';
import CheckStand from './static/CheckStand';
import PayResults from './static/PayResults';
import OrderStatus from './static/OrderStatus';
import SystemUp from './static/SystemUp';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
           <Router>
                <Switch>
                    <Route exact path="/" component={FirstLogin}></Route>
                    <Route  path="/Login" component={Login}></Route>
                    <Route  path="/HomePage" component={HomePage}></Route>
                    <Route  path="/MyOrderList" component={MyOrderList}></Route>
                    <Route  path="/CourseInfo" component={CourseInfo}></Route>
                    <Route  path="/PayOrder" component={PayOrder}></Route>
                    <Route  path="/CheckStand" component={CheckStand}></Route>
                    <Route  path="/PayResults" component={PayResults}></Route>
                    <Route  path="/OrderStatus" component={OrderStatus}></Route>
                    <Route  path="/SystemUp" component={SystemUp}></Route>
                </Switch>
           </Router>
      </div>
    );
  }
}

export default App;
