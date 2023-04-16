import Person from "./Person/Person"
import style from './Users.module.css'
import ava from './../../image/ava_icon.png'


const Users = (props) => {
    let users_list = props.users.map((user) => <Person isAuth = {props.isAuth} idInProgress = {props.idInProgress} name={user.name} key={user.id} ava={user.photos.small || ava} follow={user.followed} id={user.id} unfollowThunk = {props.unfollowThunk} followThunk={props.followThunk} />)
    let total_pages = Math.ceil(props.total_users / props.count)   
    let pages = []
    let maxpage = props.current_page === total_pages ? props.current_page : props.current_page + 1
    let minpage = props.current_page === 1 ? props.current_page : props.current_page - 1
    for (let i = minpage; (i <= maxpage);i++){
        pages.push(i)
    }
    return <div>
                <div className={style.users}>{users_list}</div>
                <div className= {style.pagination}>
                    {pages.map((page) => <button className={`${style.page_num} ${page === props.current_page ? style.active_page : ''}` }
                     onClick = {(e) => {props.onChangePage(page)}} key = {page}>{page}</button> )}
                </div>
            </div>
}
export default Users