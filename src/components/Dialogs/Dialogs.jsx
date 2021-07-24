import React from "react";
import './Dialogs.css';
import DialogItem from "./DialogItem/DialodItem";
import Message from "./Messages/Messages";


const Dialogs = (props) => {

let dialogsElem = props.data.dialogsData.map( dialog =>
  <DialogItem name={dialog.name} id={dialog.id} />);

let messagesElem = props.data.messagesData.map( message =>
  <Message message={message.message} id={message.id} />);

  // let NewDialog = React.createRef();
  // let addDialog = () => {
  //   let text = NewDialog.current.value;
  //   alert(text);
  // }

    return(
    <div className='dialogs'>
      <div className='dialog-items'>
        {dialogsElem}
      </div>
      <div className='messages'>
        {messagesElem}
        </div>
        {/* <textarea ref={NewDialog}></textarea>
        <button onClick={addDialog}> Add</button> */}
    </div>

    )
    
}

export default Dialogs