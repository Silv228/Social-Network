import React from "react";
import Preloader from "../common/Preloader/Preloader";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import style from "./Profile.module.css";
import ProfileInf from "./ProfileInf/ProfileInf";

const Profile = (props) => {
  if (props.isFetching){
    return(<Preloader/>)
  }
  return (
    <div className={style.content}>
      <ProfileInf saveAvatar = {props.saveAvatar} isOwner = {props.isOwner} id = {props.profile.userId} contacts = {props.profile.contacts} name={props.profile.fullName} hatsrc={'https://s.fishki.net/upload/post/201501/29/1406516/sakura_2015_fujitravelru-0.jpg'} ava={props.profile.photos.small || 'https://ob-kassa.ru/content/front/buhoskol_tmp1/images/reviews-icon.jpg'} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;