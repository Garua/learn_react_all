/**
 * 该文件专门用于暴露一个store对象，整个应用保有一个store对象
 */

//引入createStore，专门用于创建redux检讨书对象,store
import {createStore,applyMiddleware} from 'redux'

//引入为Count组件服务的reducer
import countReducer from './count_reducer'

//引入redux-thunk，用于支持异步action,而且要从redux引入applyMiddleware这个方法
import thunk from 'redux-thunk'

//暴露store，applyMiddleware(函数，传入thunk)作为第2个参数，
export default createStore(countReducer,applyMiddleware(thunk))

