import React, {Component} from 'react';
//容器组件
import Count from "./containers/Count/Count";
import Person from "./containers/Person/Person";
class App extends Component {
    render() {
        return (
            <div>
             {/*   给容器组件传递store*/}
             {/*<Count store={store}/>*/}

             {/*这里无需在传递store,直接在入口文件,index.js中操作，  */}
             <Count/>
                <hr/>
                <Person/>
            </div>
        );
    }
}

export default App;
