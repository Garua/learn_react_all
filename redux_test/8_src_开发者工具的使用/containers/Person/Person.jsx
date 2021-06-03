import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/actions/person";

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        console.log(name, age)
        const personObj = {id: nanoid(), name, age}
        this.props.addP(personObj)
        this.nameNode.value=''
        this.ageNode.value=''
    }

    render() {
        return (
            <div>
                <h2>我是Person组件,上方组件求和为：{this.props.sum}</h2>
                <input ref={c => this.nameNode = c} type='text' placeholder='输入名字'/>
                <input ref={c => this.ageNode = c} type='text' placeholder='输入年龄'/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((p) => {
                            return <li key={p.id}>{p.name}---{p.age}</li>
                        })

                    }
                </ul>
            </div>
        );
    }
}

//用容器和redux交流
export default connect(
    state => ({persons: state.persons,sum:state.sum}),//相当于redux中保存的person利用props的方法传递给组件
    {addP:createAddPersonAction}//映射操作状态的方法,也会传递给ui组件
)(Person)
