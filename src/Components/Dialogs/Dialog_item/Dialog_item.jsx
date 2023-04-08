import style from "./Dialog_item.module.css";
import { NavLink } from "react-router-dom";
const DialogItem = ({name,ava,ident}) => {
    return(
        <div className= {style.item}>
            <img src = {ava} alt = {'ava'+ name } className = {style.ava}></img>
            <NavLink to = {`/messages/${ident}`} className = {style.name}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;