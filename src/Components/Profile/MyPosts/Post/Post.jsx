import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return(
    <div className={style.post}>
    <div className={style.avacont}>
      <img className={style.ava} src={props.ava || 'https://ob-kassa.ru/content/front/buhoskol_tmp1/images/reviews-icon.jpg'} alt="ava"></img>
    </div>
    <div className={style.parea}>
      <p className={style.text}>{props.message}</p>
      <div className={style.reaction}>
        <span>{props.likes}like</span>
      </div>
    </div>
  </div>
  )
}

export default Post;