import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Detail from "./Detail/Detail";

class Message extends Component {
    state = {
        messageArr: [
            {id: 1, title: '消息1'},
            {id: 2, title: '消息2'},
            {id: 3, title: '消息3'}
        ]
    }
    replaceShow = (id,title)=>{
        //编写一段代码，让它跳转到detail组件，且为replace跳转,params参数
        // this.props.history.replace(`/home/messages/detail/${id}/${title}`)
        //search参数
        // this.props.history.replace(`/home/messages/detail?id=${id}&title=${title}`)
        // state参数
        this.props.history.replace(`/home/messages/detail`,{id,title}) //属性名和值重名，简写
    }
    pushShow = (id,title)=>{
        //params参数
        // this.props.history.push(`/home/messages/detail/${id}/${title}`)
        //search参数
        // this.props.history.push(`/home/messages/detail?id=${id}&title=${title}`)
        //state参数
        this.props.history.push(`/home/messages/detail`,{id,title})
    }
    back = ()=>{
        this.props.history.goBack()
    }
    forward = ()=>{
        this.props.history.goForward()
    }
    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {messageArr.map(msgObj => {
                        return (
                            <li key={msgObj.id}>
                                {/*模板字符串是js的语法？所以用{},  向路由组件传递params参数*/}
                                {/*<Link to={`/home/messages/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>*/}

                                {/*    向路由组件传递search参数*/}
                                {/*<Link to={`/home/messages/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>*/}

                                {/*向路由传递传递state参数*/}
                                <Link  to={{pathname:'/home/messages/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
                                &nbsp;
                                <button onClick={()=>this.pushShow(msgObj.id,msgObj.title)}>push查看</button>
                                &nbsp;
                                <button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>
                            </li>
                        )
                    })}
                </ul>
                <hr/>
                {/*声明接收params参数*/}
                {/*<Route path='/home/messages/detail/:id/:title' component={Detail}/>*/}

                {/*search参数无需声音接收，正常注册即可*/}
                <Route path='/home/messages/detail' component={Detail}/>

                {/*state参数无需声明接收，正常注册即可*/}
                {/*<Route path='/home/messages/detail' component={Detail}/>*/}

                <button onClick={this.back}>back</button>
                <button onClick={this.forward}>forward</button>
            </div>
        );
    }
}

export default Message;
