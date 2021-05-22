import React, {Component} from 'react';
import axios from "axios";


//  package.json(中只能配置一个这样的，多个参考下面) "proxy": "http://localhost:3000/" 可以解决跨域的问题
// 3000是前端的端口，这里要配制成和前端一样的端口，前端的请求网上面的代理地址，通过代理地址转发到后端
// 跨域：请求能发出去，但是因为端口不同，所以接收不到数据，这里配置后，服务器会把数据发给代理地址(3000端口)，这样端口就和前端一样了
// 就能接收到数据了。注意如果请求的资源前端已经有了，就会找前端的 ：比如发送这样一个请求：http://localhost:3000/index.html
// 前端有index.html这个页面，所有返回的是这个页面的内容


/**
 *  setupProxy.js(注意名字)中可以配置多个，  axios.get('http://localhost:5000/api1/xx');记得在5000后面加个api1后，再跟后端的url
 */
class App extends Component {
    getStudentData = ()=>{
        axios.get('http://localhost:3000/api/v1/article/get').then(
            response =>{
                console.log('成功了',response.data)
            },
            error =>{
                console.log(error.message())
            }
        )
    }
    render() {
        return (
            <div>
               <button onClick={this.getStudentData}>点我获取学生数据</button>
            </div>
        );
    }
}

export default App;
