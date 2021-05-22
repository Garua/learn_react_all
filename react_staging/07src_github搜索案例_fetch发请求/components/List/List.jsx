import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import './list.css'

class List extends Component {
    //初始化状态
    state = {
        users: [],//存放数据
        isFirst: true,//是否第一次打开，显然欢迎
        isLoading: false,//标识是否处理加载中
        err: ''//存储请求相关的错误信息

    }
    updateAppState = (stateObj) => {
        //更新app的 state
        this.setState(stateObj)
    }

    //组件挂载完成订阅消息
    componentDidMount() {
        //订阅名叫loocc的消息,token方便后面取消订阅，类比定时器
        this.token = PubSub.subscribe('loocc', (_, stateObj) => {//接收两个参数，第一个是消息名字，不用，用_代替
            console.log('List---->', stateObj)
            this.setState(stateObj)
        })
    }
    //组件卸载时，取消订阅
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (

            <div className="row">
                {
                    isFirst ? <h2>输入关键字，随后点击搜索</h2> :
                        isLoading ? <h2>Loading....</h2> :
                            err ? <h2 style={{color: "red"}}>{err}</h2> :
                                users.map((userObj) => {
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                                <img alt='avatar'
                                                     src={userObj.avatar_url}
                                                     style={{width: '100px'}}/>
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>

                                    )
                                })
                }
            </div>

        );
    }
}

export default List;
