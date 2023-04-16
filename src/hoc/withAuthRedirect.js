import { connect } from "react-redux"
import { Navigate} from "react-router-dom"

const mapStateToPropsForRedirect = (state) => {
    return ({
        isAuth: state.Auth.isAuth
    })
}
export const WithAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        return props.isAuth ? <Component {...props} /> : <Navigate to='/login' />
    } 
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}