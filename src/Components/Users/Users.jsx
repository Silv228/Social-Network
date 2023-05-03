import Person from "./Person/Person"
import style from './Users.module.css'
import ava from './../../image/ava_icon.png'
import React from "react"
import Preloader from "../common/Preloader/Preloader"
import Paginator from "../common/Paginator/Paginator"

const Users = (props) => {
    let users_list = props.users.map((user) => <Person myId = {props.myId} isAuth={props.isAuth} idInProgress={props.idInProgress} name={user.name} key={user.id} ava={user.photos.small || ava} follow={user.followed} id={user.id} unfollowThunk={props.unfollowThunk} followThunk={props.followThunk} />)
    let pages = []
    let classNameForBtn = props.sortArgFoll === null ? style.all : props.sortArgFoll ? style.follow : style.nofollow
    if (props.total_pages) {
        let maxpage = props.current_page === props.total_pages ? props.current_page : props.current_page + 1
        let minpage = props.current_page === 1 ? props.current_page : props.current_page - 1
        for (let i = minpage; (i <= maxpage); i++) {
            pages.push(i)
        }
    }
    const changeField = (e) => {
        props.changeQueryUser(e.target.value)
    }
    return (
        <>
            <div className={style.SettingSearch}>
                <input className={style.search_users} onChange={changeField} placeholder="Search users" value={props.queryUser} />
                <button className={`${style.sort_btn} ${classNameForBtn}`} onClick={props.changeArgFoll}></button>
            </div>
            {
                props.isFetching ? <Preloader /> :
                    <div>
                        <div className={style.users}>{users_list}</div>
                        {props.total_pages ?
                            <Paginator pages = {pages} current_page = {props.current_page} onChangePage = {props.onChangePage}/> :
                            <h1>No Search</h1>}
                    </div>
            }
        </>
    )
}

export default Users