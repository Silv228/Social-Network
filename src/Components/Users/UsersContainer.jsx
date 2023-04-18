import { connect } from "react-redux";
import { followThunk, unfollowThunk, getUsersThunk, changeQueryUser } from "../../redux/users_reduser";
import Users from "./Users";
import React, { useEffect } from "react"
import Preloader from "../common/Preloader/Preloader";
import { getCount, getCurrentPage, getIdInProgress, getIsAuth, getIsFetchingUsers, getQueryUser, getTotalUsers, getUsers } from "../../redux/selectors";

const UsersAPIContainer = (props) => {
    useEffect(() => {
        props.getUsersThunk(props.current_page, props.count, props.queryUser)
    }, [props.queryUser])
    const onChangePage = (page) => {
        props.getUsersThunk(page, props.count, props.queryUser)
    }
    return (
        <>
            <Users isFetching={props.isFetching} users={props.users} total_users={props.total_users}
                count={props.count} current_page={props.current_page} onChangePage={onChangePage}
                followThunk={props.followThunk} unfollowThunk={props.unfollowThunk} changeQueryUser={props.changeQueryUser}
                idInProgress={props.idInProgress} queryUser={props.queryUser} isAuth={props.isAuth} 
            />
        </>
    )

}

const mapStateToProps = (state) => {
    return ({
        users: getUsers(state),
        total_users: getTotalUsers(state),
        count: getCount(state),
        current_page: getCurrentPage(state),
        idInProgress: getIdInProgress(state),
        isFetching: getIsFetchingUsers(state),
        isAuth: getIsAuth(state),
        queryUser: getQueryUser(state)
    })
}

const UsersContainer = connect(mapStateToProps, { getUsersThunk, followThunk, unfollowThunk, changeQueryUser })(UsersAPIContainer)

export default UsersContainer