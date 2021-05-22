import React, {Component} from 'react';
import { Route} from 'react-router-dom'
import About from './pages/About/About'
//路由组件
import Home from './pages/Home/Home'

//一般组件
import Header from "./components/Header/Header";
import MyNavLink from "./components/MyNavLink/MyNavLink";
class App extends Component {

    //  要实现路由跳转，1，2处的代码必须在一个路由器里面，这里为了方便，直接在index.js中包
    render() {
        return (

            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*原生html中，靠a标签跳转不同页面*/}
                            {/*<a className="list-group-item" href="./about.html">About</a>*/}
                            {/*<a className="list-group-item active" href="./home.html">Home</a>*/}
                            {/*    在React中靠路由链接实现切换组件*/}
                            {/*  1   */}
                            {/*如果想要高亮，用NavLink,NavLink默认有个classActiveName属性，用来设置激活时的样式, */}


                            {/*About,Home标签内容，会是一个特殊的属性children*/}
                            <MyNavLink  to="/about" >About</MyNavLink>
                            <MyNavLink to='/home'>Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由*/}

                                   {/*   2  */}
                                   <Route path="/about" component={About}/>
                                   <Route path="/home" component={Home}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
