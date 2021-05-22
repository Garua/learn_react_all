import React, {Component} from 'react';
import './Item.css'

class Item extends Component {
    // 每个item组件都有这个属性，鼠标移入哪个item，哪个item的state.mouse就变成true,从而控制样式

    //标识鼠标移入，移出
    state = {mouse: false}

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            //传入false代表鼠标移出，true代表移入
            <li style={{background: mouse ? '#add' : 'white'}} onMouseLeave={this.handleMouse(false)}
                onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                {/*不用高阶的写法*/}
                <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger"
                        style={{display: mouse ? 'block' : 'none'}}>删除
                </button>
            </li>
        );
    }

    //高阶函数
    // onMouseLeave,onMouseEnter是接收函数回调，所以这个方法应该返回一个函数
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }
    //勾选或者取消勾选的回调
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
            console.log(id, event.target.checked)

        }
    }

    // 删除一个todo，不用高阶的写法
    handleDelete = (id) => {
        if(window.confirm('确认删除嘛?')){
            this.props.deleteTodo(id)
            console.log('获取到的id',id)
        }
        return
    }
}

export default Item;
