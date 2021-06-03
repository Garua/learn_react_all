//Count组件的容器组件（桥梁）


//引入CountUI组件
import CountUI from "../../components/Count/Count";

//引入redux
// import store from "../../redux/store";

//引入action
import {createDecrementAction, createIncrementAction,createIncrementAsyncAction} from "../../redux/count_action";
//引入connect用于连接UI组件与redux
import {connect} from "react-redux";


//使用connect()()创建并暴露一个Count的容器组件
//a,b的返回值，分别是redux中的状态，以及操作状态的方法
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)


// a函数的返回值，作为状态传递给UI组件,即传递redux中保存的状态
//redux调用a的时候，已经把state(store.getState())传递过来了，接收即可
function mapStateToProps(state) {
    return {count: state}
}

// b函数的返回值，作为状态传递给UI组件,即传递redux中保存的状态---操作状态的方法
// 这里redux也已经把dispatch传递过来了
function mapDispatchToProps(dispatch) {
    return {
        //通知redux执行加法
        jia: value =>  dispatch(createIncrementAction(value)),
        jian: value =>  dispatch(createDecrementAction(value)),
        jiaAsync: value=>dispatch(createIncrementAsyncAction(value,500))
    }
}

//connect()(CountUI)，第一个括号里面接收两个函数，第二个括号接收UI组件
