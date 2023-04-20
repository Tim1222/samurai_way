import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.item} src='https://cdn.pixabay.com/photo/2020/08/28/11/10/ocean-5524264_1280.jpg'/>
            </div>
            <div className={s.descriprionBlock}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;