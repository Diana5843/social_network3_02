import React from 'react'
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div>New post</div>
     <Post massage='Hi. How are you?' like='15'/>
     <Post massage="It's my first post" like='20'/> 
    </div>
  );
}

export default MyPosts
