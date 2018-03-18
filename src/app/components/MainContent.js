import React from 'react';
import BlogPost from './BlogPost';
import posts from '../config/Blog';

class MainContent extends React.Component
{
    render() {

        console.log(posts);

        let postList = posts.map((item, index) => {
            return <BlogPost
                id={item.id}
                name={item.name}
                author={item.author}
                description={item.description}
                img={item.img}
                imgName={item.imgName}
                key={index}
            />
        });

        return <div className="row">
                <div className="col-lg-9">
                    {postList}
                </div>
                <div className="col-lg-3">
                    Sidebar
                </div>
            </div>

    }
}

export default MainContent;