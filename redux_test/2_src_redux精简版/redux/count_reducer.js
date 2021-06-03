/**
 * 该文件是用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数
 * reducer函数会接收到两个参数，分别为:之前的状态（preState），动作对象（action)
 */


const initState = 0
export default function countReducer(preState=initState, action) {//形参的默认值，没传或者传递的时候是undefined,会直接把initState赋值给preState
    // if (preState === undefined) {//初始化的时候
    //     preState = 0
    // }
    console.log(preState,action)
    //从action对象中获取:type,date
    const {type, value} = action
    console.log(type,value)
    switch (type) {
        case "increment": //如果是加
            return preState + value*1
        case "decrement"://如果是减
            return preState - value*1
        default://初始化的时候
            return preState
    }
}
