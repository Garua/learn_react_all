import React, {Component} from 'react';
import ReactDOM from 'react-dom'
// class Demo extends Component {
//     state = {count:0}
//     componentDidMount() {
//         setInterval(()=>{
//             this.setState(state=>({count:state.count+1} ))
//         })
//     }
//
//     add = ()=>{
//         this.setState(state=>({count:state.count+1}))
//     }
//     render() {
//         return (
//             <div>
//                 <h2>当前求和为：{this.state.count}</h2>
//                 <button onClick={this.add}>点我加1</button>
//             </div>
//         );
//     }
// }

//Demo调用1+n次
function Demo() {
    //a是一个数组，包含状态和更新状态方法

    //这里底层做了特殊处理，不会覆盖，会缓存下来
    const [count, setCount] = React.useState(0)
    // const [name, setName] = React.useState('hello')

    //函数式组件使用生命周期,如果不传第参数，就相当于监测所有，
    // 写空数组时，表示谁也不监测,只在组件挂载完毕时调用一次,[count,name],组件挂载完毕或者count，name发生改变时调用
    // React.useEffect接收两个参数，第一个是函数，第二个是数组
    // 第一个参数的返回值是函数时，此函数将具有和componentWillUnmount一样的作用
    React.useEffect(()=>{
        let timer = setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        return ()=>{
            console.log('##')
            clearInterval(timer)
        }
    },[])
    function add() {
        // setCount(count+1) 第一种写法
        setCount(count => count + 1)
    }

    // function changeName() {
    //     setName('golang')
    //
    // }
    const myRef = React.useRef()
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    //提示输入回调
    function show(){
        console.log(1)
        alert(myRef.current.value)
    }
    return (
        <div>
            <input type='text' ref={myRef}/>
            <h2>当前求和为:{count}</h2>
            {/*<h2>我的名字是：{name}</h2>*/}
            <button onClick={add}>点我加1</button>
            <button onClick={unmount}>卸载点我</button>
            <button onClick={show}>点击提示数据</button>
            {/*<button onClick={changeName}>点我改名</button>*/}
        </div>
    )
}

export default Demo;
