import React from 'react'

const type = 'ADD-POST';
const type1 = 'UPDATE-NEW-POST-TEXT';

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionTypes) => void
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
export type MessagesPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type updateNewPostTextPropsType = {
    updateNewPostText: (value: string) => void
}
export type ActionTypes = AddPostActionType | ChangeNewTextActionType
type AddPostActionType = {
    type: 'ADD-POST',
    newPostText: string
}
type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}



let store: StoreType = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('chaged')
    },

    getState() {
        return this._state;
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === type) {
            let newPost = {
                id: this._state.profilePage.postData.length + 1,
                message: this._state.profilePage.newPostText,
                likes: 0
            }

            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === type1) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: type,
        newPostText: 'test'
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: type1,
        newText: text
    } as const
}

export default store;
// window.store = store;


// let state: StateType = {
//     profilePage: {
//         postData: [
//             {id: 1, message: 'Hi, how are you?', likes: 15},
//             {id: 2, message: 'How are you?'},
//             {id: 3, message: 'Where do you live'},
//             {id: 4, message: 'How are you?'}
//         ],
//         newPostText: 'it-kryto'
//     },
//     messagesPage: {
//         dialogsData: [
//             {id: 1, name: 'Tima'},
//             {id: 2, name: 'Sasha'},
//             {id: 3, name: 'Victor'},
//             {id: 4, name: 'Masha'}
//         ],
//         messagesData: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How are you?'},
//             {id: 3, message: 'Yo'}
//         ]
//     },
//
// }


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

