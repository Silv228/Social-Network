import React from "react";
import style from "./ProfileInf.module.css";
import iconsContacts from "../../../image/icons.js"
import ProfileStatusContainer from "./ProfileStatus";

const ProfileInf = (props) => {
  const linksCommunication = () =>{
    let socNetCont = []
    for (let contact of Object.entries(props.contacts)){
      if (contact[1])  socNetCont.push(contact[0])
    }
    return socNetCont
  } 
  let contacts = linksCommunication().map((link) => <li><a href={(/^https:\/\//.test(props.contacts[link]) ? '' : 'https://') + props.contacts[link]} rel="noopener noreferrer" target="_blank">{iconsContacts[link]}</a></li>)
  return (
    <div className={style.content}>
      <img src={props.hatsrc} alt = 'hat profile  ' className={style.hat_content}></img>
      <img src={props.ava} alt="ava_profile" className={style.ava}></img>
      <div className={style.name}>{props.name}</div>
      <ProfileStatusContainer />
      <ul className={style.contacts}>
        {contacts}
      </ul>
    </div>
  );
}

export default ProfileInf;