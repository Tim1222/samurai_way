import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: number
}
type MessagePropsType = {
    message: string
    id: number
}

const DialogItem = (props: DialogPropsType) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Tima'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Masha'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'}
    ]

    let messageElement = messagesData.map((el) => {
        return (
            <Message message={el.message} id={el.id}/>
        )
    })
    let dialogsElenents = dialogsData.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    })
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