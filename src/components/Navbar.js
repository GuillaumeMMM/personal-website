import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <ul>
                    <li className={this.props.selected === 'work' ? 'selected' : ''} onClick={this.props.handleNavClick.bind(this, 'work')}>Work</li>
                    <li className={this.props.selected === 'blog' ? 'selected' : ''} onClick={this.props.handleNavClick.bind(this, 'blog')}>Blog</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;