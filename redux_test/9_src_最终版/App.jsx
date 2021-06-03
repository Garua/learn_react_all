import React, {Component} from 'react';
//容器组件
import Count from "./containers/Count/Count";
import Person from "./containers/Person/Person";

class App extends Component {
    render() {
        return (
            <div>
                <Count/>
                <hr/>
                <Person/>
            </div>
        );
    }
}

export default App;
