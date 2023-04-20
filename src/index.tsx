import React from 'react';
import './index.css';
import state from "./redux/State";
import {rerenderEnrireTree} from "./render";


// postData={postData} dialogsData={dialogsData} messagesData={messagesData}

// addPost('hello')

// export let rerenderEnrireTree = () => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App state={state} addPost={addPost}/>,</BrowserRouter>,
//         document.getElementById('root')
//     );
// }

rerenderEnrireTree(state);

//@ts-ignore
// window._state = state
