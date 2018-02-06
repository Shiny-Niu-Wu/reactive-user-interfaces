import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {


    return(
      <div className = "Article">
              <time>{this.props.date}</time>
        <div className = "Content">
              <p className = "subtitle">{this.props.subtitle}</p>
              <h2>{this.props.title}</h2>
              <p className = "description">{this.props.description}</p>
              <p className = "writer">By <span>{this.props.writer}</span></p>
        </div>
            <figure>
              <img src={this.props.imgSrc} alt={this.props.imgSrc}/>
            </figure>
      </div>
    );
  }
}

export default Article;
