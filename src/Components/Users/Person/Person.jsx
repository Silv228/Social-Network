import React from "react"
import style from './Person.module.css'
import { NavLink } from 'react-router-dom'
import { FollowApi } from "../../../api/api"


const Person = (props) => {
    
    const onAddFriens = () => {
        props.followThunk(props.id)
    }
    const onDeleteFrriend = () => {
        props.unfollowThunk(props.id)
    }
    return (
        <div>   
            <div className={style.user} >
                <NavLink to={`/users/${props.id}`}><img className={style.ava} src={props.ava} alt='ava'></img></NavLink>
                <div className={style.btn}>
                    <NavLink to={`/users/${props.id}`} className={style.name}>{props.name}</NavLink>
                    {
                        !props.follow ?
                        <button disabled = {props.idInProgress.includes(props.id)} onClick={onAddFriens} className={style.folbtn}>Add Friend</button> : 
                        <button disabled = {props.idInProgress.includes(props.id)} onClick={onDeleteFrriend} className={style.folbtn}>Remove Friend</button>
                    }
                </div>
            </div>

        </div>
    )
}
export default Person