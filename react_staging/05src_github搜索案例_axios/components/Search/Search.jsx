import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {
    search = () => {
        console.log(this.keyWordElement.value)
        //发送请求前通知app更新状态
        this.props.updateAppState({isFirst: false,isLoading: true})
        // const {value} = this.keyWordElement 常规解析赋值

        // 先解构赋值得到keyWordElement，再从keyWordElement解构赋值得到value
        const {keyWordElement: {value: keyWord}} = this
        // const {keyWordElement:{value:data}} = this;连续解构赋值并改掉value的名字为data
        // 这里输入keyWordElement，会报错，
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                console.log('成功了！',response.data.items)
                this.props.updateAppState({users: response.data.items,isLoading: false})
            },
            error => {
                console.log('失败了')
                //更新状态，显示错误信息
                this.props.updateAppState({isLoading: false,err:error.message})
            }
        )
    }

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
