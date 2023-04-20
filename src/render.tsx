import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType} from "./redux/State";
import {BrowserRouter} from "react-router-dom";



export let rerenderEnrireTree = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>,</BrowserRouter>,
        document.getElementById('root')
    );
}
