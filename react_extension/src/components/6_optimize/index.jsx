import React, {PureComponent} from 'react';
import './index.css'

//Component的2个问题
// 1：只要执行setState()，即使不改变状态数据，组件也会重新render()
// 只要当前组件重新render(),就会自动重新render()子组件，纵使子组件没有使用到父组件的任何东西-->效率低
export default  class Parent extends PureComponent {
    state = {carName:"奔驰C63",stus:['小张','小李','小王']}
    changeCar = ()=>{
        // this.setState({carName:'红旗'})
        // this.setState({})
        const obj = this.state
        obj.carName = '红旗'

        //this.setState({carName:'红旗'})设置新对象
        //是同一个对象，所以PureComponent底层做了浅对比，shouldComponentUpdate返回false
        console.log(obj===this.state)
        this.setState(obj)
    }
    addStu = ()=>{
        // const {stus} = this.state
        // stus.unshift('小刘')
        // this.setState({stus})
        //上面添加不了，stus是同一个
        const {stus} = this.state
        this.setState({stus:['小刘',...stus]})
    }
    render() {
        const {carName} = this.state
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <br/>
                {this.state.stus}
                <br/>
                <span>我的座驾名称：{carName}</span>
                <br/>
                <button onClick={this.changeCar}>点我换车</button>
                <button onClick={this.addStu}>添加一个小刘</button>
                <Child carName='奥拓'/>
            </div>
        );
    }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log(this.props,this.state) //目前的props和state
    //     console.log(nextProps,nextState)//接下来要变化的目标props，目标state
    //     console.log('---------------------------')
    //     return this.state.carName !== nextState.carName
    // }
}

class Child extends PureComponent {
    render() {
        console.log('child---render')
        return (
            <div className='child'>
                <h3>我是Child组件</h3>
                <span>我收到的车是：{this.props.carName}</span>
            </div>
        );
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(this.props,this.state) //目前的props和state
    //     console.log(nextProps,nextState)//接下来要变化的目标props，目标state
    //     return this.props.carName !== nextProps.carName
    // }
}

