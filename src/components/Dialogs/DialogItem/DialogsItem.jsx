import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../DialogItem/DialogsItem.module.css';

const DialogsItem = props => {
  let path = '/dialogs/' + props.id
  return (
    <div className={classes.dialog}>
      <NavLink to={path} className={classes.linkDialog}>{props.name}</NavLink>
    </div>
  );
}
export default DialogsItem;