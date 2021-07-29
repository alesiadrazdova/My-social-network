import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/DialodItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElem = state.dialogs.map(dialog =>
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);

  let messagesElem = state.messages.map(message =>
    <Message message={message.message} id={message.id} key={message.id} />);
  let newMessageBody = state.newMessageBody;

  let onMessageClick = () => {
    props.sendMessage();
  }

  let onNewMesageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBodyCreator(body)
  }

  return (
    <div className='dialogs'>
      <div className='dialog-items'>
        {dialogsElem}
      </div>
      <div className='messages'>
        {messagesElem}
      </div>
      <textarea value={newMessageBody} onChange={onNewMesageChange} placeholder='Enter your message'></textarea>
      <button onClick={onMessageClick}> Add</button>
    </div>

  )

}

export default Dialogs;