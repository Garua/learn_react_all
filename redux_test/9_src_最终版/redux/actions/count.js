/**
 * 该文件专门为Count组件生成action对象
 */
import {INCREMENT, DECREMENT} from "../constant";
//箭头函数写法，右侧只有一句，且返回一个对象时，用()包裹
export const increment = value => ({type: INCREMENT, value})

export function decrement(value) {
    return {type: DECREMENT, value}
}


//如果action返回的是一般对象，那么它是同步action
// 如果返回一个函数，则是异步action，一般会在里面调用同步action
export function incrementAsync(value, time) {
    //这里可以不用引入store,这里可以接收到一个dispatch参数，
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(value))
        },time)
    }
}
