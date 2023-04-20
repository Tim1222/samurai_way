import React from "react";
import s from './Post.module.css'

type PropsType = {
    message: string
    likes?: number
    id: number
}


const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQND0Br49DEhXKhAaASompT8rXn8mzWE6r92A&usqp=CAU'}/>
            {props.message}
            <div>Like count {props.likes}</div>

            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;