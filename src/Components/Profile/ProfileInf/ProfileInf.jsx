import React from "react";
import style from "./ProfileInf.module.css";
import iconsContacts from "../../../image/icons.js"
import ProfileStatusContainer from "./ProfileStatus";
import ProfileSetting from "./ProfileSetting";

const ProfileInf = (props) => {
  const updateAvatar = (e) => {
    if (e.target.files) props.saveAvatar(e.target.files[0])
  }
  const linksCommunication = () => {
    let socNetContact = []
    for (let contact of Object.entries(props.contacts)) {
      if (contact[1]) socNetContact.push(contact[0])
    }
    return socNetContact
  }
  const contacts = linksCommunication().map((link) => <li key={linksCommunication().indexOf(link)}><a href={(/^https:\/\//.test(props.contacts[link]) ? '' : 'https://') + props.contacts[link]} rel="noopener noreferrer" target="_blank">{iconsContacts[link]}</a></li>)
  
  return (
    <div className={style.content}>
      {props.editMode && <ProfileSetting initialDataContact = {props.initialDataContact} updateProfile = {props.updateProfile} profile={props.profile} editMode={props.editMode} setEditMode={props.setEditMode} />}
      <img src={props.hatsrc} alt='hat profile' className={style.hat_content} />
      <div className={style.ava}>
        <img src={props.ava} alt="ava_profile" />
        {props.isOwner && <label>
          <input onChange={updateAvatar} type="file" accept=".jpg, .jpeg, .png" />
          <span>✎</span>
        </label>
        }
      </div>
      <div className={style.name}>{props.name}</div>
      <ProfileStatusContainer isOwner = {props.isOwner}/>
      <ul className={style.contacts}>
        {contacts}
        {props.isOwner && <button onClick={() => props.setEditMode(true)}>edit</button>}
      </ul>
    </div>
  );
}

export default ProfileInf;