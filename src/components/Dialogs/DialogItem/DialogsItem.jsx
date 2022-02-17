import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../DialogItem/DialogsItem.module.css';

const DialogsItem = props => {
  let path = '/dialogs/' + props.id
  return (
    <div className={classes.dialog}>
      <NavLink to={path} className={classes.linkDialog}>{props.name}</NavLink>
      <img src='https://media.npr.org/assets/img/2021/08/06/dog-4415649-18eab39206426b985f7a5f69e3146a2cd1a56c0d-s800-c85.webp' />
    </div>
  );
}
export default DialogsItem;