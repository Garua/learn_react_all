import React, {Component} from 'react';

class Child extends Component {
    state = {
        // users:[
        //     {id:'001',name:'tom',age:19},
        //     {id:'002',name:'jack',age:20},
        //     {id:'003',name:'jerry',age:21},
        //     {id:'004',name:'poeny',age:22},
        // ],
        users:'abc'
    }
    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                {this.state.users.map(u=>{
                    return <h4 key={u.id}>{u.name},{u.age}</h4>
                })}

            </div>
        );
    }
}

export default Child;
