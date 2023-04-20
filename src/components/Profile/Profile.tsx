import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/State";

type postDataType = {
    postData: PostDataType[]
    addPost: (text:string) => void
}

const Profile = (props: postDataType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts postData={props.postData} addPost={props.addPost}/>
    </div>
}

export default Profile;