import React from 'react'


let rerenderEnrireTree = () => {
    console.log('chaged')
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type ProfilePageType = {
    postData: PostDataType[]
    newPostText: string
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
        ],
        newPostText: 'it-kryto'
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


export let addPost = () => {
    let newPost = {
        id: state.profilePage.postData.length + 1,
        message: state.profilePage.newPostText,
        likes: 0
    }

    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEnrireTree()
}

export type updateNewPostTextPropsType = {
    updateNewPostText: (value: string) => void
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEnrireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEnrireTree = observer;
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