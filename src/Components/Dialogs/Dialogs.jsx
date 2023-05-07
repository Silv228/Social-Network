import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./Dialog_item/Dialog_item";
import Message from "./Message/Message";
import { useForm } from "react-hook-form";

const Dialogs = ({setMessage, state }) => {

  const dialogElements = state.dialogData.map(dialog => <DialogItem
    name={dialog.name} key={dialog.ident} ident={dialog.ident} ava={dialog.ava} />)
  const MessageElements = state.MessageData.map(mess => <Message
    state={mess.send} key={mess.ident}>{mess.text}</Message>)

  let onSetMessage = (data, reset) => {
    setMessage(data.message);
    reset()
  }
  return (
    <div className={style.content}>
      <FormNewMessage onSubmit={onSetMessage} />
      <div className={style.dialogs}>
        {dialogElements}
      </div>
      <div className={style.dialog}>
        {MessageElements}
      </div>

    </div>
  );
}

const FormNewMessage = ({onSubmit}) => {
  const {register, handleSubmit, reset} = useForm()

  return (
    <form className={style.sendmess} onSubmit={handleSubmit((data) => onSubmit(data, reset))}>
      <input {...register("message")} placeholder='Input message' />
      <button>Send</button>
    </form>
  )
}

export default Dialogs;