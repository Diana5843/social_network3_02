import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  
  let postEl = props.postData.map(msg => (
    <Post id={msg.id} message={msg.message} likesCount={msg.likesCount} />
  ));
  
  return (
    <div className={classes.postsBlock}>
      <h3>MY POSTS</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postEl}</div>
    </div>
  )
}

export default MyPosts
