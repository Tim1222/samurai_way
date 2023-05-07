import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionTypes, addPostActionCreator, PostDataType, updateNewPostTextActionCreator} from "../../../redux/State";

type postDataProps = {
    postData: PostDataType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}



const MyPosts = (props: postDataProps) => {

    let postElements = props.postData.map((el) => {
        return (
            <Post message={el.message} likes={el.likes} id={el.id}/>
        )
    })
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator())

        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current?.value
            let action = updateNewPostTextActionCreator(text);
            props.dispatch(action)
        }
    }
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>

            {/*<Post id={postData[0].id} message={postData[0].message} like={postData[0].like}/>*/}
            {/*<Post message="Hi, how are you?" like={15} id={1}/>*/}
            {/*<Post message="It is my first post" like={20} id={2}/>*/}
            {postElements}
        </div>
    </div>
}

export default MyPosts;