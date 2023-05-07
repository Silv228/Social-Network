import React from "react";
import { connect } from "react-redux";
import { logIn } from "../../redux/auth_reducer";
import style from './Login.module.css'
import { required, validEmail } from "../common/Validate/validators";
import { FormControls, PasswordField } from "../common/Validate/FormControls";
import { Navigate } from "react-router-dom";
import styleError from "../common/Validate/FormControls.module.css"
import { useForm } from "react-hook-form";

const LoginForm = (props) => {
    const { register, handleSubmit, resetField, formState: { errors } } = useForm({ mode: 'onChange' })
    return (
        <form className={style.formLogin} onSubmit={handleSubmit((data) => props.onSubmit(data, resetField))}>
            <FormControls register={register} validate={{ required, validEmail }} errors={errors} className={style.login} placeholder="email" />
            <PasswordField register={register} validate={{ required }} errors={errors} className={style.password} placeholder="password" />
            <div className={style.rememberme}>
                <input {...register('rememberMe')} className={style.checboxrememberme} id='rememberMe' type="checkbox" />
                <label htmlFor='rememberMe'>Remember Me</label>
            </div>
            <div className={props.error && styleError.summaryError}>
                {props.error}
                {props.captcha && <img src={props.captcha} alt="captcha"></img>}
                {props.captcha && <input {...register('captcha', {required: true})}></input>}
            </div>
            <button className={style.loginbtn}>Log In</button>
        </form>
    )
}

const Login = (props) => {
    const logIn = (data, resetField) => {
        let { login, password, rememberMe, captcha } = data
        props.logIn(login, password, rememberMe, captcha)
        resetField('captcha')
    }
    return (
        props.isAuth ?
            <Navigate to="/profile" /> :
            <div>
                <h1 className={style.header}>LOGIN PAGE</h1>
                <LoginForm captcha = {props.captcha} error={props.error} onSubmit={logIn} />
            </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.Auth.isAuth,
        error: state.Auth.error,
        captcha: state.Auth.captcha
    })
}

const LoginContainer = connect(mapStateToProps, { logIn })(Login)

export default LoginContainer