import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        const {todos} = this.props
        // 计算已完成的个数，总数
        // todos.reduce()对数据进行条件统计，最值等
        const doneCount = todos.reduce((pre, todo) =>
                pre + (todo.done ? 1 : 0)
            , 0) //这个0是初始值
        const total = todos.length

        return (
            <div className="todo-footer">
                <label>
                    {/*defaultChecked只在页面第一次进来的的时候起效果
                        写了checked，必须写onChange，不然修改不了checkbox的状态
                    */}
                    <input type="checkbox" onChange={this.handleClearAllDone} checked={doneCount === total && total !== 0?true:false}/>
                </label>
                <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>

        );
    }
    handleClearAllDone = ()=>{
                this.props.handleClearAllDone()
    }

}

export default Footer;
