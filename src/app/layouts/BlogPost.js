import React from 'react';

class BlogPost extends React.Component
{
    render() {
        return <div className="row" key={this.props.key}>
            <article className="blogpost">
                <header>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.author}</p>
                </header>
                <p>{this.props.description}</p>
                <figure>
                    <img className="blogpost__image" src={this.props.img} alt="Justin Beaver's cat is pleased"/>
                    <figcaption>{this.props.imgName}</figcaption>
                </figure>
            </article>
            </div>

    }
}

export default BlogPost;