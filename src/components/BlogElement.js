import React, { Component } from 'react';

class BlogElement extends Component {
    render() {
        return (
            <div className="blog-element-container">
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.description}</p>
                <p className="blog-element-link" role="link"><a href={this.props.data.link} target="_blank">{this.props.data.link.split('//')[1]}</a></p>
            </div>
        );
    }
}

export default BlogElement;