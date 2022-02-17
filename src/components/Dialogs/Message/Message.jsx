import React from 'react'
import classes from '../Message/Message.module.css'
import { NavLink } from 'react-router-dom'

const Message = props => {

  let addMsg = () => {
    let message = newMsgEl.current.value;
    alert(message);
  }
  let newMsgEl = React.createRef();
  

  return (
    <div className='dialogsBlock'>
      <div className={classes.dialog}>{props.message} </div>
      <div className={classes.msgOnClick}>
        <div>
          <textarea placeholder='Write the message' ref={newMsgEl}></textarea>
        </div>
        <div>
          <button onClick={addMsg}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message
