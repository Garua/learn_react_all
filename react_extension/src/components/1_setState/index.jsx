import React, {Component} from 'react';

// 如果新状态不依赖于原状态，推荐使用对象式setState
// 如果依赖，可以用函数式setState,不用const {}解构获取
class Demo extends Component {
    state = {count:0}
    add = ()=>{
        //对象式的setState
        const {count} = this.state
        this.setState({count:count+1},()=>{
            //该回调函数，在react改完状态，调用完render时，调用
            console.log(this.state.count)
        })
        //这里输出还是旧值，因为更新是异步的，
        // console.log(this.state.count)
        /********************************************************/
        //函数式setState,可以获取state，和props,都可以省略
        this.setState(()=>({count:99}))
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        );
    }
}

export default Demo;
