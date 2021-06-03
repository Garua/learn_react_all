import React, {Component} from 'react';
import './index.css'
//创建Context对象
const MyContext = React.createContext()

class A extends Component {
    state = {username: 'tom', age: 19}

    render() {
        const {username, age} = this.state
        return (
            <div className='parent'>
                <h3>我是A组件</h3>
                <h4>我的用户名是：{username}</h4>
                {/* 也可以解构赋值，直接使用Provider标签*/}
                <MyContext.Provider value={{username: username, age: age}}>
                    <B/>
                </MyContext.Provider>
            </div>
        );
    }
}

export default A;


class B extends Component {
    render() {
        return (
            <div className='child'>
                <h3>我是B组件</h3>
                {/*<h4>我从A组件接收到的用户名：{this.props.username}</h4>*/}
                <C/>
            </div>
        );
    }
}


// class C extends Component {
//     //必须使用static contextType = MyContext;声明接收
//     static contextType = MyContext
//     render() {
//         console.log(this.context)
//         return (
//             <div className='grand'>
//                 <h3>我是C组件</h3>
//                 <h4>我从A组件接收到的用户名：{this.context.username},年龄:{this.context.age}</h4>
//
//             </div>
//         );
//     }
// }
function C() {
    return (
        <div className='grand'>
            <h3>我是C组件</h3>
            <h4>我从A组件接收到的用户名:<MyContext.Consumer>
                {
                    value => {//可以简写
                       return  `${value.username},年龄是:${value.age}`
                    }
                }
            </MyContext.Consumer>
            </h4>
        </div>
    )

}
