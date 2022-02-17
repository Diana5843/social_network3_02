import React from 'react';
import classes from './Friends.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';

const Friends = (props) => {

  let friendsEl = props.sidebar.map(friend => (
    <Friend id={friend.id} name={friend.name} />
  ));

  return (
      <div className={classes.friends}>
        {friendsEl}
      </div>
  )
}

export default Friends;


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
