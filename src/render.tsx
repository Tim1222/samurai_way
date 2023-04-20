import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/State";
import {addPost} from "./redux/State";
import {BrowserRouter} from "react-router-dom";


// postData={postData} dialogsData={dialogsData} messagesData={messagesData}

// addPost('hello')

export let rerenderEnrireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>,</BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEnrireTree();

//@ts-ignore
// window._state = state
