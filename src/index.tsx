import React from 'react';
import './index.css';
import store, {StateType, StoreType} from "./redux/State";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEnrireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
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

rerenderEnrireTree(store.getState());
store.subscribe(rerenderEnrireTree);

//@ts-ignore
// window._state = state
