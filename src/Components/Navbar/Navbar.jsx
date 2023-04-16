import React from "react";
import { NavLink} from "react-router-dom";
import style from "./Navbar.module.css";

const active_class = act => act.isActive ? style.active : style.item;

const Navbar = (props) => {
  let pass = props.isAuth ?
    <div>
      {props.login}<br />
      <button className={style.login} onClick={props.logOut}>Log out</button>
    </div> :
    <div>
      <NavLink to='/login' className={style.login}>Login</NavLink>
    </div>
  return (
    <nav className={style.nav}>
      <ul>
        <li><NavLink to='/profile' className={active_class}> Profile</NavLink></li>
        <li><NavLink to='/messages' className={active_class}>Messages</NavLink></li>
        <li><NavLink to='/news' className={active_class}>News</NavLink></li>
        <li><NavLink to='/music' className={active_class}>Music</NavLink></li>
        <li><NavLink to='/settings' className={active_class}>Settings</NavLink></li>
        <li><NavLink to='/users' className={active_class}> Users</NavLink></li>
      </ul>
      {pass}
    </nav>
  );
}

export default Navbar;