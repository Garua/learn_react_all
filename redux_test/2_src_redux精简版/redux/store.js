/**
 * 该文件专门用于暴露一个store对象，整个应用保有一个store对象
 */

//引入createStore，专门用于创建redux检讨书对象,store
import {createStore} from 'redux'

//引入为Count组件服务的reducer
import countReducer from './count_reducer'


//暴露store
export default createStore(countReducer)

