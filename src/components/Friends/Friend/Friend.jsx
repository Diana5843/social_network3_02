import React from 'react';
import classes from './Friend.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {

  let path = '/friends/' + props.id;

  return (
    <div className={classes.friend}>
          <img className={classes.friendImage} src='https://media.npr.org/assets/img/2021/08/06/dog-4415649-18eab39206426b985f7a5f69e3146a2cd1a56c0d-s800-c85.webp'/>
          <NavLink to={path} className={classes.linkFriend}>{props.name}</NavLink>
        </div>
  )
}

export default Friend;


{/* <div className={classes.friend}>
          <NavLink to={path} className={classes.linkFriend}>{props.name}</NavLink>
        </div>
        <div className={classes.friend}>
          <NavLink to={path} className={classes.linkFriend}>{props.name}</NavLink>
        </div>
        <div className={classes.friend}>
          <NavLink to={path} className={classes.linkFriend}>{props.name}</NavLink>
          </div>
        <div className={classes.friend}>
          <NavLink to={path} className={classes.linkFriend}>{props.name}</NavLink>
        </div> */}
