import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/auth_reducer";
import Navbar from "./Navbar";  

const NavbarContainer = (props) => {
    return(
        <Navbar logOut = {props.logOut} {...props.data}/>
    )
}
const mapStateToProps = (state)=> {
    return{
        data : state.Auth
    }
}

const NavbarCont = connect(mapStateToProps, {logOut})(NavbarContainer)
export default NavbarCont