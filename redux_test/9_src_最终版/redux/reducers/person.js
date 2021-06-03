import {ADD_PERSON} from "../constant";

// reducer专门负责初始化状态和加工状态
const initState = [{id: '1', name: 'tom', age: 19}]
export default function personReducer(preState = initState, action) {
    const {type, data} = action
    //data是一个对象，但是传递过来的person对象，还要继续解构赋值
    switch (type) {
        case ADD_PERSON:
            //...把之前的数组展开
            const {personObj} = data
            return [personObj, ...preState]
            //上面如果这样写，不会引发页面更新,因为preState地址值没变，redux认为值
            // 没有改变，导致preState被改了，不是纯函数了
            // preState.unshift(personObj)
            // return preState

        default:
            return preState
    }
}
