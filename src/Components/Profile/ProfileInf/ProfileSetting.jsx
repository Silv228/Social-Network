import React from "react";
import { Field, reduxForm } from "redux-form";
import style from './ProfileSetting.module.css'

const ProfileSetting = (props) => {
    const submitProfileData = (value) => {
        props.updateProfile(value)
        props.setEditMode(false)
    }
    return (
        <div className={style.contFormSett}>
            <NewSettingFormRedux initialValues={props.initialDataContact} initialDataContact = {props.initialDataContact} onSubmit={submitProfileData} />
        </div>
    )
}

const SettingForm = (props) => {
    const contacts = Object.keys(props.initialDataContact).slice(0, 7).map((key) => {
        return <Field className={style.contactField} component={'input'} key={key} placeholder={key} name={key} />
    })

    return (
        <form onSubmit={props.handleSubmit}>
            {contacts}
            <button className={style.saveBtn}>Save</button>
        </form>
    )
}

const NewSettingFormRedux = reduxForm({ form: 'SettingProfileForm' })(SettingForm)

export default ProfileSetting