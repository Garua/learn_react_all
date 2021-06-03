import React, {Component} from 'react';
import Child from "./Child";
class Parent extends Component {
    //如何Parent任何的子组件报错，调用该方法，用携带错误信息
    state = {
        hasError:''//用于标识子组件是否产生错误
    }
    //只能捕获后代组件生命周期产生的错误，不能捕获自己产生的错误和其它组件在合成事件，定时器中产生的错误
    static getDerivedStateFromError(error){
        console.log(error)
        return {hasError:error}
    }

    // 组件出错时，也会调用这个
    componentDidCatch(error, errorInfo) {
        console.log('统计错误次数，反馈给服务器。')
    }

    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {this.state.hasError?<h2>网络不稳定，稍后再度</h2>:<Child/>}
            </div>
        );
    }
}

export default Parent;
