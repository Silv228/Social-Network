import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component{
    componentDidMount(){
        
    }
    render(){
        return(
            <Header />
        )
    }
}

let mapStateToProps = (state) => {
    
}

const HeaderCont = connect(mapStateToProps, {})(HeaderContainer)
export default HeaderCont