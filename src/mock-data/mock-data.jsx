// let rerenderEntireTree = () => {
//   console.log('State changed')
// }

// let state = {
//   profilePage: {
//     posts: [
//     {id: 1, message: 'Hello! I like this social working', likesCount: 24},
//     {id: 2, message: 'Hi! My first comment here!', likesCount: 12},
//     ],
//     newPostText: 'bla'
    
//   },
  
//   dialogsPage: {
//     dialogsData: [
//       {id: 1, name: "Roma"},
//       {id: 2, name: "Anton"},
//       {id: 3, name: "Victor"},
//       {id: 4, name: "Anna"},
//       {id: 5, name: "Dima"},
//       {id: 6, name: "Olga"},
//       {id: 7, name: "Lusy"},
//       {id: 8, name: "Oleg"},
//       {id: 9, name: "Stas"},
//       {id: 10, name: "Matfey"},
//     ],
//     messages: [
//       {id: 1, message: "How are you?"},
//       {id: 2, message: "Im fine, thanks. And you?"},
//       {id: 3, message: "Nice too"},
//       {id: 4, message: "Do you studing today?"},
//       {id: 5, message: "Lats go for a walk tonight!"},
//       {id: 6, message: "Certainly!"},
//       {id: 7, message: "OK"},
//       {id: 8, message: "I want too"},
//       {id: 9, message: "Lets go"},
//       {id: 10, message: "Nice!"},
//     ] 
//    } 
// }

// export const addPost = () => {
//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likesCount: 0
//   }
//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = '';
//   rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// }

// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// }

// export default state;


    
