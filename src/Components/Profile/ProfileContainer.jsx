import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfileThunk } from '../../redux/profile_reducer'
import { useParams } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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
        profile : state.ProfilePage.profile,
        id : state.Auth.id,
        isFetching : state.ProfilePage.isFetching
    })
}

export default compose(
    connect(mapStateToProps, { getProfileThunk}),
    WithAuthRedirect
)(ProfileContainer)
