/**
 * 该文件专门用于暴露一个store对象，整个应用保有一个store对象
 */

//引入createStore，专门用于创建redux检讨书对象,store
//combineReducers 合并reducer
import {createStore,applyMiddleware,combineReducers} from 'redux'

//引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'

//引入redux-thunk，用于支持异步action,而且要从redux引入applyMiddleware这个方法
import thunk from 'redux-thunk'

//汇总所有reducer变为一个总的reducer
const allReducer = combineReducers({
    sum:countReducer,
    persons:personReducer
})

//暴露store，applyMiddleware(函数，传入thunk)作为第2个参数，
//redux中保存多个状态时，需要用combineReducers合并
export default createStore(allReducer,applyMiddleware(thunk))

