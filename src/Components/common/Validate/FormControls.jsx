import React, { useState } from "react";
import style from "./FormControls.module.css"

export const FormControls = ({register, errors, className, validate, ...props}) => {
    const hasError = !!errors['login'] && errors['login'].message
    return (
        <>
            <div className={style.loginField}>
                <input {...register('login', {validate} )} className={`${className} ${style.formControls} ${hasError && style.error}`} {...props}/>
            </div>
            {hasError && <span className={style.promptError}>{!!errors['login'] && errors['login'].message}</span>}
        </>
    )
}

export const PasswordField = ({ register, errors, className, validate, ...props }) => {
    const [visiblePass, changeVissible] = useState(false)
    const hasError = !!errors['password'] && errors['password'].message
    return (
        <>
            <div className={`${style.passField} ${hasError && style.error}`}>
                <input {...register('password', {validate})} className={className} type={visiblePass ? 'text' : 'password'} {...props} />
                <label className={style.customCheckbox}>
                    <input className={style.checkbox} type='checkbox' onChange={() => changeVissible(!visiblePass)} />
                    <span className={style.checkmark}></span>
                </label>
            </div>
            {hasError && <span className={style.promptError}>{!!errors['password'] && errors['password'].message}</span>}
        </>
    )
}