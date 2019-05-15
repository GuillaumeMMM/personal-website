import React, { Component } from 'react';
import BlogElement from './BlogElement';

class Blog extends Component {

    state = {
        blogElements: [
            {
                title: 'Data Humanism case study',
                description: "desc",
                link: 'https://guillaumemmm.github.io/running/index.html'
            },
        ]
    }
    render() {
        return (
            <div className="blog-container">
                {this.state.blogElements.map((workElm, i) => <BlogElement data={workElm} key={i}></BlogElement>)}
            </div>
        );
    }
}

export default Blog;