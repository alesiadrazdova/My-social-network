import './Dialogs.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }

  // return {
  //   dialogs: state.profilePage.dialogs,
  //   messages: state.profilePage.messages,
    
  // }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }

}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
