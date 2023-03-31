import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://cdn.pixabay.com/photo/2020/08/28/11/10/ocean-5524264_1280.jpg'/>
        </div>
        <div>
            <img
                src='https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg'/>
            ava+description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;