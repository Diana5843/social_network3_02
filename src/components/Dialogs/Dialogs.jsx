import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogsItem from './DialogItem/DialogsItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = props => {
  let dialogsEl = props.state.dialogsData.map(dialog => (
    <DialogsItem name={dialog.name} id={dialog.id} />
  ));
  let msgEl = props.state.msgData.map(msg => <Message message={msg.message} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsEl}</div>
      <div className={classes.messages}>{msgEl}</div>
    </div>
  );
}

export default Dialogs;
