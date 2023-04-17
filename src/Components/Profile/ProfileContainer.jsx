import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfileThunk } from '../../redux/profile_reducer'
import { useParams } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getAuthId, getIsFetchingProfile, getProfile } from "../../redux/selectors";

const ProfileContainer = (props) => {
    let {userId} = useParams()
    useEffect(() => {
        let id = userId || props.id
        props.getProfileThunk(id)
    },[userId])
    return (
        <Profile isFetching = {props.isFetching} profile = {props.profile}/>
    )
}

const mapStateToProps = (state) => {
    return ({
        profile : getProfile(state),
        id : getAuthId(state),
        isFetching : getIsFetchingProfile(state)
    })
}

export default compose(
    connect(mapStateToProps, { getProfileThunk}),
    WithAuthRedirect
)(ProfileContainer)
