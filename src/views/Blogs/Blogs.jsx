import React, { Component } from 'react';
import blogs from '../../blogs/blog1.json';
import ShowBlog from './ShowBlog.jsx';
import articles from '../../blogs/blog2.js';
console.log(articles);



export default class Blogs extends Component {
    next = () => {
        console.log('next clieck');
    }
    previous = () => {
        console.log('this is previous');
    }
    render() {
        return (articles.map((element, key) => {
            return (
                <ShowBlog
                    blog={element}
                    next={this.next}
                    previous={this.previous}
                />
            )
        }))
    }
}
