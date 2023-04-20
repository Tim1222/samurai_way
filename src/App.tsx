import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import state, {addPost, StateType} from "./redux/State";
// import state from './index'
// import state, {StateType} from "./redux/State";

// type PropsType = {
//     // postData: PostDataType[]
//     // dialogsData: DialogsDataType[]
//     // messagesData: MessagesDataType[]
//     appState: StateType
// }
type AppPropsType = {
    state: StateType
    addPost: (text:string) => void
}

const App = (props: AppPropsType) => {

    //dialogsData={props.state.messagesPage.dialogsData}
    //messagesData={props.state.messagesPage.messagesData}
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state}/>}/>
                    <Route path='/profile'
                           render={() => <Profile postData={props.state.profilePage.postData}
                                                  addPost={props.addPost}/>}/>
                    {/*<Route path='/dialogs' render={() => <News/>}/>*/}
                    {/*<Route path='/dialogs' render={() => <Music/>}/>*/}
                    {/*<Route path='/dialogs' render={() => <Settings/>}/>*/}

                    {/*можно использовать компонент, но для передачи проптов лучше использовать render*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                </div>

            </div>

    );
}


export default App;
