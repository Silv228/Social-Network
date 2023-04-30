import React from "react";
import style from "./ProfileInf.module.css";
import iconsContacts from "../../../image/icons.js"
import ProfileStatusContainer from "./ProfileStatus";

const ProfileInf = (props) => {
  const updateAvatar = (e) => {
    props.saveAvatar(e.target.files[0])
  }
  const linksCommunication = () => {
    let socNetContact = []
    for (let contact of Object.entries(props.contacts)) {
      if (contact[1]) socNetContact.push(contact[0])
    }
    return socNetContact
  }
  let contacts = linksCommunication().map((link) => <li><a href={(/^https:\/\//.test(props.contacts[link]) ? '' : 'https://') + props.contacts[link]} rel="noopener noreferrer" target="_blank">{iconsContacts[link]}</a></li>)
  return (
    <div className={style.content}>
      <img src={props.hatsrc} alt='hat profile' className={style.hat_content} />
      <div className={style.ava}>
        <img src={props.ava} alt="ava_profile" />
        {props.isOwner && <label class="input-file">
          <input onChange={updateAvatar} type="file" accept=".jpg, .jpeg, .png" />
          <span>✎</span>
        </label>
        }
      </div>
      <div className={style.name}>{props.name}</div>
      <ProfileStatusContainer />
      <ul className={style.contacts}>
        {contacts}
      </ul>
    </div>
  );
}

export default ProfileInf;