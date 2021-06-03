/**
 * 该文件专门用于暴露一个store对象，整个应用保有一个store对象
 */

//引入createStore，专门用于创建redux检讨书对象,store
//combineReducers 合并reducer
import {createStore,applyMiddleware} from 'redux'

//引入汇总后的reducer
import reducer from './reducers/index'

//引入redux-thunk，用于支持异步action,而且要从redux引入applyMiddleware这个方法
import thunk from 'redux-thunk'

//引入 redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'


//applyMiddleware(thunk)
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

