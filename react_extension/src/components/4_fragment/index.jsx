import React, {Component, Fragment} from 'react';

class Demo extends Component {
    render() {
        return (
            //Fragment不会展示在页面上，会被丢弃，遍历的时候可以接收key
            // <> </>也可以用这个包裹元素，不能接收key
            <>
                <input type='text'/>
                <input type='text'/>
            </>
        );
    }
}

export default Demo;
