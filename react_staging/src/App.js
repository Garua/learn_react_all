import React, {Component} from 'react';
import {Button,DatePicker} from 'antd'
import {WechatOutlined,SearchOutlined} from '@ant-design/icons'
import './App.less'
class App extends Component {
     onChange =(date, dateString)=>{
        console.log(date, dateString);
    }
    render() {
        return (
            <div>
                <DatePicker onChange={this.onChange} />

                A...........
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <WechatOutlined />
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
            </div>
        );
    }
}

export default App;
