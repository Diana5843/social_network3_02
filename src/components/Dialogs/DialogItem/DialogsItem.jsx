import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../DialogItem/DialogsItem.module.css';

const DialogsItem = props => {
  let path = '/dialogs/' + props.id
  return (
    <div className={classes.dialog}>
      <div className={classes.image}>{props.imageDialogs}</div>
      <NavLink to={path} className={classes.linkDialog}>{props.name} {props.surname}</NavLink>
    </div>
  );
}
export default DialogsItem;