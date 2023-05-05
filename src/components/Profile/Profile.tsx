import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType, updateNewPostText} from "../../redux/State";

type postDataType = {
    postData: PostDataType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (value: string) => void
}

const Profile = (props: postDataType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts postData={props.postData}
                 addPost={props.addPost}
                 newPostText={props.newPostText}
                 updateNewPostText={props.updateNewPostText}
        />
    </div>
}

export default Profile;