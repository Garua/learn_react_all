import React, {Component} from 'react';

class Header extends Component {

    render() {
        // console.log('header收到的:',this.props)
        console.log('header')
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>

            </div>
        );
    }
}

export default Header;
