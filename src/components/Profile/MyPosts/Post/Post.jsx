import React from 'react'
import classes from './Post.module.css'

const Post = props => {
  return (
    <div className={classes.posts}>
      <div className={classes.item}>
        <div>{props.message}</div>
        <img src='https://media.npr.org/assets/img/2021/08/06/dog-4415649-18eab39206426b985f7a5f69e3146a2cd1a56c0d-s800-c85.webp' />
        <div>
          <span>like {props.likesCount}</span>
        </div>
      </div>
    </div>
  )
}

export default Post
