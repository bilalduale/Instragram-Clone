import React, { Component } from 'react';
import './Feed.css'; 
import Post from './Post';
import Abdi from './Tree.jpg'; 

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          username: 'suheaf_hussein',
          imageUrl: Abdi,
          likes: '456,678',
          caption: 'Nice view!',
          comments: [
            { username: 'commenter1', text: 'Wow, amazing!' },
            { username: 'commenter2', text: 'Beautiful!' },
          ],
        },
        {
          id: 2,
          username: 'user2',
          imageUrl: 'https://via.placeholder.com/600',
          likes: '200',
          caption: 'Amazing!',
          comments: [
            { username: 'commenter3', text: 'So cool!' },
            { username: 'commenter4', text: 'Love this!' },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="feed-container">
        {this.state.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default Feed;
