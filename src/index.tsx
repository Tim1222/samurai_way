import React from 'react';
import './index.css';
import state, {addPost, subscribe, updateNewPostText} from "./redux/State";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEnrireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

// postData={postData} dialogsData={dialogsData} messagesData={messagesData}

// addPost('hello')

// export let rerenderEnrireTree = () => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App state={state} addPost={addPost}/>,</BrowserRouter>,
//         document.getElementById('root')
//     );
// }

rerenderEnrireTree();
subscribe(rerenderEnrireTree);

//@ts-ignore
// window._state = state
