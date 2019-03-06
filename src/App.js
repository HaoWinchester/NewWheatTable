import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import FirstLogin from './static/login/FirstLogin';
import HomePage from './static/HomePage';
import Login from './static/login';
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
                </Switch>
           </Router>
      </div>
    );
  }
}

export default App;
