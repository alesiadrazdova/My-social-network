import './index.css';
import data, {subscribe} from './mock-data/mock-data';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewPostText} from './mock-data/mock-data.jsx';
import { BrowserRouter } from 'react-router-dom';

let rerenderTree = (data) => {
    ReactDOM.render( 
        <BrowserRouter>    
        <App data={data} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter> ,
  document.getElementById('root')
);

}

rerenderTree(data);

subscribe(rerenderTree);




