import React, {Component} from 'react';
import Search from "./components/Search/Search";
import List from './components/List/List'

class App extends Component {
    //初始化状态
    state = {
        users:[],//存放数据
        isFirst:true,//是否第一次打开，显然欢迎
        isLoading:false,//标识是否处理加载中
        err:''//存储请求相关的错误信息


    }
    updateAppState = (stateObj)=>{
        //更新app的 state
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        );
    }
}

export default App;
