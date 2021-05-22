import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Item from "../Item/Item";
import './List.css'

class List extends Component {
    static propTypes = {
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }
    render() {
        const {todos, updateTodo,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(todo => {
                        // 这样传参太繁琐
                        // return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>

                        // 批量传递props参数
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>

        );
    }
}

export default List;
