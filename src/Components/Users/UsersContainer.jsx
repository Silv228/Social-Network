import { connect } from "react-redux";
import { followThunk,  setCurrentPage, unfollowThunk, getUsersThunk, changeQueryUser, changeArgFoll } from "../../redux/users_reduser";
import Users from "./Users";
import React, { useEffect } from "react"
import { getArgsSort, getCount, getCurrentPage, getIdInProgress, getIsAuth, getIsFetchingUsers, getQueryUser, getTotalUsers, getUsers } from "../../redux/selectors";

const UsersAPIContainer = (props) => {
    let total_pages = Math.ceil(props.total_users / props.count)
    useEffect(() => {
        props.getUsersThunk(1, props.count, props.queryUser, props.sortArgFoll)
    }, [props.queryUser, props.sortArgFoll])
    const onChangePage = (page) => {
        props.getUsersThunk(page, props.count, props.queryUser, props.sortArgFoll)
    }
    return (
        <>
            <Users {...props} onChangePage = {onChangePage} total_pages = {total_pages} />
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
        queryUser: getQueryUser(state),
        sortArgFoll: getArgsSort(state)
    })
}

const UsersContainer = connect(mapStateToProps, { getUsersThunk, setCurrentPage, followThunk, unfollowThunk, changeQueryUser, changeArgFoll})(UsersAPIContainer)

export default UsersContainer