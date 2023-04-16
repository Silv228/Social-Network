import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./Dialog_item/Dialog_item";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";


const Dialogs = ({setMessage, state }) => {

  const dialogElements = state.dialogData.map(dialog => <DialogItem
    name={dialog.name} ident={dialog.ident} ava={dialog.ava} />)
  const MessageElements = state.MessageData.map(mess => <Message
    state={mess.send}>{mess.text}</Message>)


  let onSetMessage = (values) => {
    setMessage(values.message);
  }
  return (
    <div className={style.content}>
      <FormNewMessageRedux onSubmit={onSetMessage} />
      <div className={style.dialogs}>
        {dialogElements}
      </div>
      <div className={style.dialog}>
        {MessageElements}
      </div>

    </div>
  );
}
const FormNewMessage = (props) => {
  return (
    <form className={style.sendmess} onSubmit={props.handleSubmit}>
      <Field name="message" placeholder='Input message' component='input' />
      <button>Send</button>
    </form>
  )
}

const FormNewMessageRedux = reduxForm({ form: 'FormNewMessage' })(FormNewMessage)

export default Dialogs;