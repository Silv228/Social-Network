import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./Dialog_item/Dialog_item";
import Message from "./Message/Message";


const Dialogs = ({ChangeTextMessage, getMessage, state}) => {
  
  const dialogElements = state.dialogData.map(dialog => <DialogItem
    name={dialog.name} ident={dialog.ident} ava={dialog.ava} />)
  const MessageElements = state.MessageData.map(mess => <Message
    state={mess.send}>{mess.text}</Message>)

  
  let  OngetMessage = () => {
    getMessage();
  }
  let OnChangeTextMessage = event => {
    ChangeTextMessage(event.target.value)
  }

  return (
    <div className={style.content}>
      <div className={style.dialogs}>
        {dialogElements}
      </div>
      <div className={style.dialog}>
        {MessageElements}
      </div>
      <div className={style.sendmess}>
        <input onChange={OnChangeTextMessage} value = {state.NewMessage } type='text' placeholder='Input message' />
        <button onClick={OngetMessage}>Send</button>
      </div>
    </div>
  );
}

export default Dialogs;