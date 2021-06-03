/**
 * 该文件专门为Count组件生成action对象
 */
import {INCREMENT,DECREMENT} from "./constant";
//箭头函数写法，右侧只有一句，且返回一个对象时，用()包裹
export const createIncrementAction = value => ({type: INCREMENT, value})

export function createDecrementAction(value) {
    return {type: DECREMENT, value}
}
