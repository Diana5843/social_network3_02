import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postEl = props.postData.map(msg => (
    <Post id={msg.id} message={msg.message} likesCount={msg.likesCount} />
  ));

  let addPost = () =>{
    let text = newPostEl.current.value;
    alert(text);
  };
  let newPostEl = React.createRef();
 


  return (
    <div className={classes.postsBlock}>
      <h3>MY POSTS</h3>
      <div>
        <div>
          <textarea ref={newPostEl}></textarea>
        </div>
        <div>
          <button onClick={addPost}>add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postEl}</div>
    </div>
  );
}

export default MyPosts;
