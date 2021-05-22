import React, {Component} from 'react';
import PuSub from 'pubsub-js'

class Search extends Component {
    search = async () => {

        const {keyWordElement: {value: keyWord}} = this
        PuSub.publish('loocc', {isFirst: false, isLoading: true})
        // 使用fetch发送请求,和XHR同级别,未优化
        // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
        //     response => {
        //         response.json()返回一个promise实例，里面保存着成功的数据，或者失败的原因
        //         只能服务器能响应，都是联系成功，包括404
        // console.log('联系服务器成功了！')
        // 如果.then指定的成功的回调或者失败的回调，中如果返回一个promise实例，那么就把这个实例作为外侧.then的返回值
        // 如果.then成功的回调或者失败的回调返回的非promise值，那么外侧的.then返回的promise的状态就是成功的，值就是这个非promise值
        // return response.json()
        // },
        // error=>{
        //     console.log('联系服务器失败了',error)
        //     //中断promise链
        //     return new Promise(()=>{})
        //     //如果进入error中，如果这里没有返回值(undefined),也就是非promise值，那么外面的.then返回的
        //     // promise状态就是成功的，值为undefined，那么后面的then方法就会进入成功回调
        // }
        // ).then(
        //     response => {
        //response.json()返回一个promise实例，里面保存着成功的数据，或者失败的原因
        //只能服务器能响应，都是联系成功，包括404
        // console.log('获取数据成功了！', response)

        // },
        // error=>{
        //     console.log('获取数据失败了',error.message)
        // }
        // )


        //优化
        try{
            const res = await fetch(`https://api.github.com/search/users?q=${keyWord}`);
            const data = await res.json()
            console.log(data)
            PuSub.publish('loocc',{isLoading:false,users:data.items})
        }catch (error){
            console.log(error.message)
            PuSub.publish('loocc',{isLoading:false,err:error.message})
        }
    }


    // console.log(this.keyWordElement.value)
    //发送请求前通知app更新状态
    // this.props.updateAppState({isFirst: false,isLoading: true})
    // const {value} = this.keyWordElement 常规解析赋值

    // 先解构赋值得到keyWordElement，再从keyWordElement解构赋值得到value
    // const {keyWordElement: {value: keyWord}} = this
    // const {keyWordElement:{value:data}} = this;连续解构赋值并改掉value的名字为data
    // 这里输入keyWordElement，会报错，
    // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
    //     response => {
    //         console.log('成功了！',response.data.items)
    //         this.props.updateAppState({users: response.data.items,isLoading: false})
    // },
    // error => {
    //     console.log('失败了')
    //更新状态，显示错误信息
    // this.props.updateAppState({isLoading: false,err:error.message})
    // }
    // )


    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={c => this.keyWordElement = c} type="text"
                               placeholder="enter the name you search"/>&nbsp;
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Search;
