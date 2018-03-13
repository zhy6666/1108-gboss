import React from  'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
// import {Button} from 'antd-mobile';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './containers/login/login';
import Register from './containers/register/register';
import Dashboard from './containers/dashboard/dashboard';
//渲染标签到页面root
ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));