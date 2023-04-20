import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {StateType} from "../../redux/State";

type PropsType = {
    //dialogsData:DialogsDataType[]
   // messagesData:MessagesDataType[]
    state: StateType
}

const Dialogs = (props: PropsType) => {

    let dialogsElenents = props.state.messagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElement = props.state.messagesPage.messagesData.map(el => <Message message={el.message} id={el.id}/>)

    // [
    // <>
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
    //     <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
    // </>
    // ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElenents}
            </div>
            <div className={s.messages}>
                {/*<Message message={messagesData[0].message} id={messagesData[0].id}/>*/}
                {/*<Message message={messagesData[1].message} id={messagesData[1].id}/>*/}
                {messageElement}

            </div>
        </div>
    )
}


export default Dialogs;