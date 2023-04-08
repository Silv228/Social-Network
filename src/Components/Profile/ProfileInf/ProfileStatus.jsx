import React, { useState } from "react";
import style from "./ProfileStatus.module.css"
import { ProfileApi } from "../../../api/api";
import { updateStatus } from "../../../redux/profile_reducer";
import { connect } from "react-redux";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const addStatus = () => {
        setEditMode(false)
        ProfileApi.setStatus(props.status)
    }
    return (
        <div>
            {!editMode ?
                <div className={`${(props.id === props.myId) ? style.mystatus : style.status}`}>
                    <span onDoubleClick={() => { if (props.id === props.myId) setEditMode(true) }}>{props.status || ((props.id === props.myId) ? 'Add status' : 'No Status')}</span>
                </div> :
                <div className={`${style.status} ${style.editabeStatus}`}>
                    <input onChange={(e) => props.updateStatus(e.target.value)} autoFocus={true} onBlur={() => addStatus()} value={props.status} />
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        id: state.ProfilePage.profile.userId,
        status: state.ProfilePage.status,
        myId: state.Auth.id
    })
}

const ProfileStatusContainer = connect(mapStateToProps, { updateStatus })(ProfileStatus)

export default ProfileStatusContainer