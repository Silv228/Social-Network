import { connect } from "react-redux";
import { followThunk, unfollowThunk, getUsersThunk } from "../../redux/users_reduser";
import Users from "./Users";
import React from "react"
import Preloader from "../common/Preloader/Preloader";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.current_page, this.props.count)
    }
    onChangePage = (page) => {
        this.props.getUsersThunk(page, this.props.count)
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> :

                    <Users users={this.props.users} total_users={this.props.total_users}
                        count={this.props.count} current_page={this.props.current_page} onChangePage={this.onChangePage}
                        followThunk={this.props.followThunk} unfollowThunk = {this.props.unfollowThunk}
                        idInProgress = {this.props.idInProgress}/>
                }
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return ({
        users: state.UsersPage.users,
        total_users: state.UsersPage.total_users,
        count: state.UsersPage.count,
        current_page: state.UsersPage.current_page,
        idInProgress : state.UsersPage.idInProgress,
        isFetching : state.UsersPage.isFetching
    })
}

const UsersContainer = connect(mapStateToProps, {getUsersThunk, followThunk, unfollowThunk })(UsersAPIContainer)

export default UsersContainer