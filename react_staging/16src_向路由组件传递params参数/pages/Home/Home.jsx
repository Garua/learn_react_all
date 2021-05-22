import React, {Component} from 'react';
import  {Route,Switch,Redirect} from 'react-router-dom'
import MyNavLink from "../../components/MyNavLink/MyNavLink";
import New from "./News/New";
import Message from "./Messages/Message";
class Home extends Component {
    render() {
        // console.log('Home',this.props)
        return (
          <div>
              <h1>我是Home内容</h1>
              <ul className="nav nav-tabs">
                  <li>
                      {/*<a className="list-group-item" href="./home-news.html">News</a>*/}
                      <MyNavLink to='/home/news'>News</MyNavLink>
                  </li>
                  <li>
                      {/*<a className="list-group-item active" href="./home-message.html">Message</a>*/}
                      <MyNavLink to='/home/messages'>Messages</MyNavLink>

                  </li>
              </ul>
          {/*注册路由*/}
             <Switch>
                 <Route path='/home/news' component={New}/>
                 <Route path='/home/messages' component={Message}/>
                 <Redirect to='/home/news'/>
             </Switch>
          </div>
        );
    }
}

export default Home;
