/**
 * 该文件用于汇总所有的reducer，产生一个汇总的reducer
 * 然后在store中引入汇总的reducer
 */


//引入为Count组件服务的reducer
import sum from './count'
import persons from './person'
import {combineReducers} from "redux";

//汇总所有reducer变为一个总的reducer
//key,和value一样，简写
export default combineReducers({
    sum,
    persons
})
