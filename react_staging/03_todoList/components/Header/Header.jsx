
import React, {Component} from 'react';
// 用于生成唯一id的库
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './Header.css'

class Header extends Component {
    // 对接收的props进行类型，必要性进行限制
    static propTypes={
        addTodo:PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>

        );
    }

    // 键盘事件的回调
    handleKeyUp = (event) => {
        const {keyCode,target} = event
        if (keyCode !== 13) return
        if(target.value.trim()===''){
            alert('输入不能为空')
            return;
        }
        //构造一个对象，传递给父组件
        let todoObj = {id:nanoid(),name:target.value.trim(),done:false}
        this.props.addTodo(todoObj)
        // 清空输入
        target.value = ''
        console.log(target.value)
    }
}

export default Header;
