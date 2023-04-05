import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img src='https://cdn.pixabay.com/photo/2020/08/28/11/10/ocean-5524264_1280.jpg'/>
        </div>
        <div>
            ava+description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;