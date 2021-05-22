#### 为了区分业务js文件和组件js文件，通常把组件的后缀改成jsx或者将组件的js文件的首字母大写

#### 导入的时候js可以不用写后缀，但是jsx文件要写

----

####

## todoList案例中

#### 拆分组件，实现静态组件，注意className,style的写法

##### 动态初始化列表,如何确定将数据放在哪个组件的state中：

1,某个组件使用：放在自身的state中 2,某些组件使用：放在他们共同搞错父组件的state中(状态提升)

##### 关于父子之间的通信：

    1,父组件给子组件传递数据：通过props传递
    2，子组件给父组件传递数据：通过props,要求父提前给子组件传递一个函数

##### 注意defaultChecked和checked的区别，类似还有defaultValue和value

#### 状态在哪，操作状态的方法就在哪

#### 路由的基本使用

1、路由组件与一般组件的区别：

- 1)，写法不同
    - 一般组件：<Demo/>
    - 路由组件：<Route path='/demo' component={Demo}/>
- 2），存放位置不同(非绝对)
    - 一般组件一般放在components文件夹中
    - 路由组件一般放在pages文件夹中
- 3），接收到的props不同
    - 一般组件：写标签时传递了什么，就能接收到什么
    - 路由组件：接收到三个固定的属性 history:
      push replace go,goBack,goForward location:
      pathname,search,state:undefined match params:{},path,url

#### NavLink与封装NavLink

- NavLink可以实现路由链接高亮，通过activeClassName指定样式名
- 标签内容是一个特殊的标签属性
- 通过this.props.children可以获取标签体内容

##### Switch的使用

- 通常情况下，path和component是一一对应的
- Switch可以提高路由匹配的效率(单一匹配)

##### 解决多级路径刷新页面样式丢失的问题

- public/index.html中引入样式时不写./ 写/（常用）
- public/index.html中引入样式时不写./ 写%PUBLIC_URL%（常用）
- 使用HashRouter

##### 路由的严格匹配与模糊匹配

- 1默认使用模糊匹配,(简记：输入的路径必须包含要匹配的路径，且顺序要一致)
- 2开启严格匹配：<Route exact={true} path='/about' component={About}/>
- 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

#### 向路由组件传递参数

- params参数： 路由链接(携带参数)：`<Link to=`/demo/test/tom/${var1}/${var2}`>内容</Link>`
              注册路由声明接收：<Route path='/demo/test/:name/:id' component={Test}/>
              接收参数：const{id,title} = this.props.match.params
- search参数： 路由链接：<Link to={`/home/messages/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
              注册路由：<Route path='/home/messages/detail' component={Detail}
              接收参数：this.props.location.search
              备注：获取到search是urlencoded编码的字符串,需要借助querystring解析
  - state参数   路由链接： <Link to={{pathname:'/home/messages/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
                接收： const {id, title} = this.props.location.state
                备注：刷新也可保留参数

####编程式路由导航
- 借助this.props.history对象上的api完成 
- this.props.history.push()
- this.props.history.replace()
- this.props.history.goBack()
- this.props.history.goForward()
- this.props.history.go()

#######BrowserRouter与HashRouter的区别
    1、底层原理不一样
        BrowserRouter使用的是H5的history API
        HashRouter使用是URL的哈希值
    2、path表现形式不一样
        BrowseRouter的路径中没有#,eg:localhost://3000/demo/test
        HashRouter的路径包含#，eg:localhost:3000/#/demo/test
    3、刷新后对路由state参数的影响
        BrowserRouter没有影响，因为state存在在history对象中
        HashRouter刷新后会导致路由的state参数丢失。
        HashRouter可以用于解决一些路径相关的错误


####antd自定义
按需引入，需要安装几个东西：yarn add react-app-rewired customize-cra
文档`https://3x.ant.design/docs/react/use-with-create-react-app-cn`
