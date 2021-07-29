const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: "Roma" },
        { id: 2, name: "Anton" },
        { id: 3, name: "Victor" },
        { id: 4, name: "Anna" },
        { id: 5, name: "Dima" },
        { id: 6, name: "Olga" },
        { id: 7, name: "Lusy" },
        { id: 8, name: "Oleg" },
        { id: 9, name: "Stas" },
        { id: 10, name: "Matfey" },
    ],
    messages: [
        { id: 1, message: "How are you?" },
        { id: 2, message: "Im fine, thanks. And you?" },
        { id: 3, message: "Nice too" },
        { id: 4, message: "Do you studing today?" },
        { id: 5, message: "Lats go for a walk tonight!" },
        { id: 6, message: "Certainly!" },
        { id: 7, message: "OK" },
        { id: 8, message: "I want too" },
        { id: 9, message: "Lets go" },
        { id: 10, message: "Nice!" },
    ],
    newMessageBody: ''
};


const dialogsReduser = (state = initialState, action) => {
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE: 
        let body = state.newMessageBody;
            return {...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 11, message: body }]
            };        
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => (
    { type: UPDATE_NEW_MESSAGE_BODY, newText: body }
)

export default dialogsReduser;