/*
*/
import {createStore,applyMiddleware} from 'redux';
import trunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers';
//向外暴漏一个store对象
export default createStore(reducers,composeWithDevTools(applyMiddleware(trunk)));