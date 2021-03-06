import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from './redux/state'

export let rerenderEntireTree = (AppState) =>{
    ReactDOM.render(
      <React.StrictMode>
        <App state={AppState} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

reportWebVitals();
