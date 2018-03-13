/*
 根据老的state和action来产生一个新的state返回
 */
import {combineReducers} from 'redux';
function xxx(state=0,action) {
    return state
}
function yyy(state=0,action) {
    return state
}
export default combineReducers({//返回的依然是reducer函数
  xxx,
  yyy
})