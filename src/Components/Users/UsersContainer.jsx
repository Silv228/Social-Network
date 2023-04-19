import { connect } from "react-redux";
import { followThunk, unfollowThunk, getUsersThunk, changeQueryUser, setCurrentPage, changeOrderList } from "../../redux/users_reduser";
import Users from "./Users";
import React, { useEffect } from "react"
import { getCount, getCurrentPage, getIdInProgress, getIsAuth, getIsFetchingUsers, getOrderList, getQueryUser, getTotalUsers, getUsers } from "../../redux/selectors";

const UsersAPIContainer = (props) => {
    let total_pages = Math.ceil(props.total_users / props.count)
    useEffect(() => {
        props.setCurrentPage(1)
        props.getUsersThunk(props.current_page, props.count, props.queryUser, props.directList, total_pages)
    }, [props.queryUser, props.directList])
    const onChangePage = (page) => {
        props.getUsersThunk(page, props.count, props.queryUser, props.directList, total_pages)
    }
    return (
        <>
            <Users directList = {props.directList} isFetching={props.isFetching} users={props.users} total_users={props.total_users}
                count={props.count} current_page={props.current_page} onChangePage={onChangePage}
                followThunk={props.followThunk} unfollowThunk={props.unfollowThunk} changeQueryUser={props.changeQueryUser}
                idInProgress={props.idInProgress} queryUser={props.queryUser} isAuth={props.isAuth} 
                changeOrderList = {props.changeOrderList} total_pages = {total_pages}
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
        queryUser: getQueryUser(state),
        directList: getOrderList(state)
    })
}

const UsersContainer = connect(mapStateToProps, { getUsersThunk, followThunk, unfollowThunk, changeQueryUser, setCurrentPage, changeOrderList })(UsersAPIContainer)

export default UsersContainer