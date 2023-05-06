import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostDataType} from "../../redux/State";

type postDataType = {
    postData: PostDataType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const Profile = (props: postDataType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts postData={props.postData}
                 newPostText={props.newPostText}
                 dispatch={props.dispatch}
        />
    </div>
}

export default Profile;