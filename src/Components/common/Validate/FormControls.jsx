import React, { useState } from "react";
import style from "./FormControls.module.css"

export const FormControls = ({ input, meta, className, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <>
            <div className={style.loginField}>
                <input className={`${className} ${style.formControls} ${hasError && style.error}`} {...input} {...props} />
            </div>
            {hasError && <span className={style.promptError}>{meta.error}</span>}
        </>
    )
}

export const PasswordField = ({ input, meta, className, ...props }) => {
    const [visiblePass, changeVissible] = useState(false)
    const hasError = meta.touched && meta.error
    return (
        <>
            <div className={`${style.passField} ${hasError && style.error}`}>
                <input className={className} {...input} type={visiblePass ? 'text' : 'password'} {...props} />
                <label className={style.customCheckbox}>
                    <input className={style.checkbox} type='checkbox' onChange={() => changeVissible(!visiblePass)} />
                    <span className={style.checkmark}></span>
                </label>
            </div>
            {hasError && <span className={style.promptError}>{meta.error}</span>}
        </>
    )
}