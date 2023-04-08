import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='input' name='login' placeholder="email" /><br />
            <Field component='input' name='password' placeholder="password" /><br />
            <Field component='input' type="checkbox" name='rememberMe' /> Remember me<br />
            <button >Log In</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const login = (data) =>{
       let {login, password, rememberMe} = data
    }
    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <LoginReduxForm onSubmit={login}/>
        </div>
    )
}

export default Login