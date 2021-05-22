import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
class MyNavLink extends Component {
    render() {
        const {title} = this.props
        console.log('--------',this.props)
        //标签体内容，About,Home也是特殊的标签属性--->children
        return (
            <NavLink activeClassName='loocc' className='list-group-item' {...this.props} />

        );
    }
}

export default MyNavLink;
