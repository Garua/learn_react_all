import React, {Component} from 'react';
import './index.css'
import C from '../1_setState/index'
class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                {/*Parent给A组件传递一个函数，返回值是B组件*/}
                <A render={(name) => <C name={name}/>}/>
            </div>
        );
    }
}

export default Parent;

class A extends Component {
    state = {name: 'tom'}

    render() {
        const {name} = this.state
        return (
            <div className='a'>
                <h3>我是A组件</h3>
                {this.props.render(name)}
                {/*<B name={this.state.name}/>*/}
            </div>
        );
    }
}

class B extends Component {
    render() {
        console.log('B')
        return (
            <div className='b'>
                <h3>我是B组件,{this.props.name}</h3>
            </div>
        );
    }
}
