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
        default:
            return preState
    }
}
