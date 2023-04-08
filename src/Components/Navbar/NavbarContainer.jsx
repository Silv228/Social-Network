import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authUserThunk } from "../../redux/auth_reducer";
import Navbar from "./Navbar";  

const NavbarContainer = (props) => {
    useEffect (() => {
        props.authUserThunk()
    },[])
    return(
        <Navbar {...props.data}/>
    )
}
const mapStateToProps = (state)=> {
    return{
        data : state.Auth
    }
}

const NavbarCont = connect(mapStateToProps, {authUserThunk})(NavbarContainer)
export default NavbarCont