import React from 'react';
import classes from '../Message/Message.module.css';
import {NavLink} from "react-router-dom";

const Message = props => {
    return (
    <div className='dialogsBlock'>
    <div className={classes.dialog}>{props.message} </div>
    </div>
    );
  }

export default Message;