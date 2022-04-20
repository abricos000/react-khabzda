import React from "react";
import s from "./Post.module.css";

type Props = {
  message: string,
  likes: number,
  dates: Date
  clearID: number
}

const Post = (props: Props) => {
    return (
        
            <div className={s.item}>
                <div className={s.itemMessage}>
                    <img  className={s.postPhoto} alt="альт не забывай" src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"/>
                     {props.message}
                </div>
                 
                <div>
                    <img className={s.likesIcon} alt="likes not loaded" src="instagram-ui-928813.png"/>
                     {props.likes} 
                   <div className={s.date}> {props.dates} <img className={s.clearIcon} alt="CLEAR not loaded" src="clean.png"/></div>
                </div>
            </div>
    
    );
}
export default Post;