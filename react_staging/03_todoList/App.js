// 不是引入的时候解构赋值，
import React, {Component} from 'react'
import './App.css'
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
//创建暴露App组件

export default class App extends Component {
    // 状态在哪，操作状态的方法就在哪
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打豆豆', done: false},
            {id: '004', name: '逛街', done: false},
        ]
    }

    // addTodo用于添加一个todo，接收参数是一个对象
    addTodo = (todoObj) => {
        const {todos} = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({todos: newTodos})
    }

    // 选中和取消选中的时更改done的状态
    updateTodo = (id, done) => {
        const {todos} = this.state
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                // 更新指定id的done属性，同名简写
                return {...todo, done}
            } else {
                return todo
            }
        })
        this.setState({todos: newTodos})
    }
    // 删除一个todo
    deleteTodo = (id) => {
        const {todos} = this.state
        // 删除指定的id对象
        const newTodos = todos.filter(todoObj => {
            return todoObj.id !== id
        })
        this.setState({todos: newTodos})
    }

    // handleCheckAll 全选或者全不选
    handleCheckAll = (flag) => {
        const {todos} = this.state
        const newTodos = todos.map(todo => {
            //把所有todo的done值改为true
            return {...todo, done: flag}
        })
        this.setState({todos: newTodos})
    }
    // 清除所有已经完成的todo
    handleClearAllDone = ()=>{
        const {todos} = this.state
        const newTodos = todos.filter(todo =>{
            return !todo.done
        })
        this.setState({todos: newTodos})
    }
    render() {
        const {todos} = this.state
        // 子给父传参，要求父给子传递一个函数
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.handleCheckAll} handleClearAllDone={this.handleClearAllDone} />
                </div>
            </div>
        )
    }
}

