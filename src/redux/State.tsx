import React from 'react';
import {rerenderEnrireTree} from "../render";

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type ProfilePageType = {
    postData: PostDataType[]
}
export type PostDataType = {
    id: number
    message: string
    likes?: number
}
type MessagesPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}
type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}

let state: StateType = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', likes: 15},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Where do you live'},
            {id: 4, message: 'How are you?'}
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Tima'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Victor'},
            {id: 4, name: 'Masha'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'}
        ]
    },

}


export let addPost = (text: string) => {
    let newPost = {
        id: state.profilePage.postData.length + 1,
        message: text,
        likes: 0
    }

    state.profilePage.postData.push(newPost)
    rerenderEnrireTree(state)
}

// let postData: PostDataType[] = [
//     {id: 1, message: 'Hi, how are you?', likes: 15},
//     {id: 2, message: 'How are you?'},
//     {id: 3, message: 'Where do you live'},
//     {id: 4, message: 'How are you?'}
// ]
// let dialogsData: DialogsDataType[] = [
//     {id: 1, name: 'Tima'},
//     {id: 2, name: 'Sasha'},
//     {id: 3, name: 'Victor'},
//     {id: 4, name: 'Masha'}
// ]
// let messagesData: MessagesDataType[] = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How are you?'},
//     {id: 3, message: 'Yo'}
// ]


export default state;