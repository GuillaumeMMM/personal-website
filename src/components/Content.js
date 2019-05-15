import React, { Component } from 'react';
import Navbar from './Navbar';
import Work from './Work';
import Blog from './Blog';

class Content extends Component {

    state = {
        selected: 'work'
    }

    render() {
        return (
            <div className="content-container">
                {/* <Navbar selected={this.state.selected} handleNavClick={this.onNavClick}></Navbar> */}
                {this.state.selected === 'work' ? <Work></Work> : <Blog></Blog>}
            </div>
        );
    }

    onNavClick = (type, e) => {
        this.setState({selected: type});
    }
}

export default Content;