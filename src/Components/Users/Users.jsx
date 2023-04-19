import Person from "./Person/Person"
import style from './Users.module.css'
import ava from './../../image/ava_icon.png'
import React from "react"
import Preloader from "../common/Preloader/Preloader"

const Users = (props) => {
    let users_list = props.users.map((user) => <Person isAuth={props.isAuth} idInProgress={props.idInProgress} name={user.name} key={user.id} ava={user.photos.small || ava} follow={user.followed} id={user.id} unfollowThunk={props.unfollowThunk} followThunk={props.followThunk} />)
    let pages = []
    if (props.total_pages){
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
            <input onChange={changeField} placeholder="Search users" value={props.queryUser} />
            <button onClick={() => props.changeOrderList(true)}>1</button>
            <button onClick={() => props.changeOrderList(false)}>2</button>
            {/* <button onClick={}>followed</button> */}    
            {
                props.isFetching ? <Preloader /> : 
                <div>
                    <div className={style.users}>{users_list}</div>
                    {props.total_pages? <div className={style.pagination}>
                        {pages.map((page) => <button className={`${style.page_num} ${page === props.current_page ? style.active_page : ''}`}
                            onClick={() => props.onChangePage(page)} key={page}>{page}</button>)}
                    </div> : 
                    <h1>No Search</h1>}
                </div>
            }
        </>
    )
}

export default Users