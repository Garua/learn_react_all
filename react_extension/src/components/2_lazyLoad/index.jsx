import React, {Component,lazy,Suspense} from 'react';
import { NavLink,Route} from 'react-router-dom'
import Loading from "./Loading";
// import About from './About/index'
// import Home from './Home/index'
const Home = lazy(()=>import('./Home/index'))
const About = lazy(()=>import('./About/index'))
class Demo extends Component {

    //  要实现路由跳转，1，2处的代码必须在一个路由器里面，这里为了方便，直接在index.js中包
    render() {
        return (

            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            <NavLink className='list-group-item' to="/about" >About</NavLink>
                            <NavLink className='list-group-item' to="/home" >Home</NavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                              {/*fallback 网速慢或者加载失败时显示Loading组件*/}
                              <Suspense fallback={<Loading/>}>
                                  <Route path="/about" component={About}/>
                                  <Route path="/home" component={Home}/>
                              </Suspense>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Demo;
