## 1.求和安全——redux精简版
    1.去除Count组件自身的状态
    2.srt下建立
        -src
            -redux
                -store.jx
                -count_reducer.js
    3.store.js
        1.引入redux中的createStore函数，创建一个store
        2.createStore调用时要传入一个为其服务的reducer
        3.暴露store对象
    4.count_reducer.js
        1.reducer的本质是一个函数，接收：preState,action，返回加工后的两个状态
        2.reducer有两个作用，初始化状态，加工状态
        3.reducer第一次被调用时，是store自动触发的，
            传递的preState是undefined
                 action:{type:@@redux/INITo.x.p.w.y.a}
    5.在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
       备注：redux只负责管理状态，至于状态驱动页面展示，要靠我们自己写


## 2.求和安全-redux完整版
    新增文件：
        1.count_action.js专门用于创建action对象
        2.constant.js放置常量
## 3.求和案例_redux异步action版
        1.明确：延迟的自动，不想交给组件自身，想交给action
        2.何时需要异步action，想要对状态进行操作，但是具体的数据是靠异步任务返回的
        3.具体编码：
            1.  `yarn add redux-thunk `，并配置在store中，        
            2.创建action的函数不再返回一个一般对象，而是一个函数，该函数中写异步任务
            3.异步任有结果后，分发一个同步action去真正操作数据。
        4.备注：异步action不是必须要写的，完全可以自己等待异步任务有结果了，再去分发同步action
## 4.求和案例的react-redux基本使用
        1.明确两个概念：
            1.UI组件：不能使用任何redux的api，只负责页面的呈现，交互等
            2.容器组件：负责和redux通信，将结果交给UI组件
        2.如何创建一个容器组件-->靠react-redux的connect()函数
            connect(mapStateToProps,mapDispatchToProps)(UI组件)
                mapStateToProps:映射状态，返回值是一个对象，该方法可以有个参数，state，是redux调用时自动传递过来的，里面是redux中的状态值
                mapDispatchToProps：映射操作状态的方法，返回值也是一个对象，该方法可以有个参数，dispatch，是redux调用时自动传递过来的，用来分发操作
        3.备注，容器组件中的store是靠props传递进去的，而不是在容器组件中直接引入
        4.备注2：mapDispatchToProps也可以是一个对象，简写

## 5.求和案例react-redux的优化
        1.容器组件和UI组件混成一个文件
        2.无需自己给容器组件传递store,在index.js文件中给<App/>包裹一个<Provider store={store}></Provider>即可
        3.使用了react-redux后，也不会自己在监测redux中状态的改变，容器组件可以自己完成这个工作。
        4.mapDispatchToProps也可以简写成一个对象
        5.一个组件要和redux打交道“要经过哪几步”
            1.定义好一个UI组件-->(不暴露，UI组件和容器组件在一个文件中)
            2.引入connect生成一个容器组件，并暴露，写法如下：
                connect(state=>(k:v),//映射状态
                        {key,action}//映射操作状态的方法
                        )(UI组件)
            3.在UI组件中通过this.props.xxx读取和操作状态 
## 求和安全react-redux数据共享版
        1.定义一个Person组件，和Count组件通过redux共享数据
        2.为Person组件编写：reducer,action,配置constant和窗口组件
        3.重点：Perso组件的reducer和Count的reducer要使用combinReducers进行合并，
            合并后的总状态是一个对象！！！！
        4.交给store的是总reducer，最后注意在组件中取出状态时，记得‘取到位’

## redux中的reducer必须是一个纯函数

##  求和案例react-redux开发者工具的使用
    1.yarn add redux-devtools-extension
    2.在store中配置，
        import {composeWithDevTools} from 'redux-devtools-extension'
        const store = create(allReducer,composeWithDevTools(applyMiddleware(thunk)))


## 求和案例react-redux最终版
    1.所有变量名规范，尽量触发对象的简写模式
    2.reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer
