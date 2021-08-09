import React from 'react';
import DialogItem from './DialogItem/DialodItem';
import Message from './Messages/Messages';
import { Button } from '@material-ui/core';
import './Dialogs.css';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElem = state.dialogs.map(dialog =>
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);

  let messagesElem = state.messages.map(message =>
    <Message message={message.message} id={message.id} key={message.id} />);
  let newMessageBody = state.newMessageBody;

  let onMessageClick = () => {
    props.sendMessage();
  };

  let onNewMesageChange = (event) => {
    props.updateNewMessageBody(event.target.value);
  };

  return (
    <div className='dialog-wrapper'>
      <div className='dialogs'>
        <div className='dialog-items'>
          {dialogsElem}
        </div>
        <div className='messages'>
          {messagesElem}
        </div>
      </div>
      <div className='txt'>
        <textarea className='txt-area-dialogs' value={newMessageBody} onChange={onNewMesageChange} placeholder='Enter your message'></textarea>
      <Button variant="contained" color='primary' style={{ width: 110 }} onClick={onMessageClick} className='btn-txt'> Add</Button>
      </div>      
    </div>
  );
};

export default Dialogs;
