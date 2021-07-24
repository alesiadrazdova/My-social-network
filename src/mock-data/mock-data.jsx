let rerenderEntireTree = () => {
  console.log('State changed')
}

let data = {
  profilePage: {
    posts: [
    {id: 1, message: 'Hello! I like this social working', likesCount: 24},
    {id: 2, message: 'Hi! My first comment here!', likesCount: 12},
    ],
    newPostText: 'bla'
    
  },
  
  messagesPage: {
    dialogsData: [
      {id: 1, name: "Roma"},
      {id: 2, name: "Anton"},
      {id: 3, name: "Victor"},
      {id: 4, name: "Anna"},
      {id: 5, name: "Dima"},
      {id: 6, name: "Olga"},
      {id: 7, name: "Lusy"},
      {id: 8, name: "Oleg"},
      {id: 9, name: "Stas"},
      {id: 10, name: "Matfey"},
    ],
    messagesData: [
      {id: 1, message: "How are you?"},
      {id: 2, message: "Im fine, thanks. And you?"},
      {id: 3, message: "Nice too"},
      {id: 4, message: "Do you studing today?"},
      {id: 5, message: "Lats go for a walk tonight!"},
      {id: 6, message: "Certainly!"},
      {id: 7, message: "OK"},
      {id: 8, message: "I want too"},
      {id: 9, message: "Lets go"},
      {id: 10, message: "Nice!"},
    ] 
   } 
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: data.profilePage.newPostText,
    likesCount: 0
  }
  data.profilePage.posts.push(newPost);
  data.profilePage.newPostText = '';
  rerenderEntireTree(data);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export const updateNewPostText = (newText) => {
  data.profilePage.newPostText = newText;
  rerenderEntireTree(data);
}

export default data;


    
