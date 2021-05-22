import React, {Component} from 'react';

class New extends Component {
    componentDidMount() {
        this.timer = setTimeout(()=>{
            this.props.history.push(`/home/messages`)
        },2000)
    }
    componentWillUnmount() {
        window.clearTimeout(this.timer)
    }

    render() {
        return (
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        );
    }
}

export default New;
