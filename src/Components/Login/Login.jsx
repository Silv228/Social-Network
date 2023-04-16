import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { logIn } from "../../redux/auth_reducer";
import style from './Login.module.css'
import { required, validEmail } from "../common/Validate/validators";
import { FormControls, PasswordField } from "../common/Validate/FormControls";
import { Navigate } from "react-router-dom";
import styleError from "../common/Validate/FormControls.module.css"

const LoginForm = (props) => {
    return (
        <form className={style.formLogin} onSubmit={props.handleSubmit}>
            <Field className={style.login} validate={[required, validEmail]} component={FormControls} name='login' placeholder="email" />
            <Field className={style.password} validate={[required]} component={PasswordField} name='password' placeholder="password" />
            <div className={style.rememberme}>
                <Field className={style.checboxrememberme} id='rememberMe' component={"input"} type="checkbox" name='rememberMe' />
                <label htmlFor='rememberMe'>Remember Me</label>
            </div>
            <div className={props.error && styleError.summaryError}>
                {props.error}
            </div>
            <button className={style.loginbtn}>Log In</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const logIn = (data) => {
        let { login, password, rememberMe } = data
        props.logIn(login, password, rememberMe, false)
    }
    return (
        props.isAuth ?
            <Navigate to="/profile" /> :
            <div>
                <h1 className={style.header}>LOGIN PAGE</h1>
                <LoginReduxForm onSubmit={logIn} />
            </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.Auth.isAuth
    })
}

const LoginContainer = connect(mapStateToProps, { logIn })(Login)

export default LoginContainer