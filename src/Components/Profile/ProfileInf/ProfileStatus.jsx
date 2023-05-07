import React, { useEffect, useState } from "react";
import style from "./ProfileStatus.module.css"
import { ProfileApi } from "../../../api/api";
import { updateStatus } from "../../../redux/profile_reducer";
import { connect } from "react-redux";
import { getAuthId, getId, getStatus } from "../../../redux/selectors";

export const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const addStatus = () => {
        setEditMode(false)
        props.updateStatus(status)
        ProfileApi.setStatus(status)
    }
    return (
        <div>
            {!editMode ?
                <div className={`${props.isOwner ? style.mystatus : style.status}`}>
                    <span className={props.isOwner ? style.mystts : style.stts} onDoubleClick={() => { props.isOwner && setEditMode(true) }}>{status || (props.isOwner ? 'Add status' : 'No Status')}</span>
                </div> :
                <div className={`${style.status} ${style.editabeStatus}`}>
                    <input onChange={(e) => setStatus(e.target.value)} autoFocus={true} onBlur={() => addStatus()} value={status} />
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return ({
        id: getId(state),
        status: getStatus(state),
        myId: getAuthId(state),
        isOwner: ownProps.isOwner
    })
}

export default connect(mapStateToProps, { updateStatus })(ProfileStatus)