import React from "react";
import style from './ProfileSetting.module.css'
import { useForm } from "react-hook-form";

const SettingForm = ({initialDataContact, onSubmit}) => {
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            mode: 'onChange',
            defaultValues: { ...initialDataContact }
        }
    )

    const contacts = Object.keys(initialDataContact).slice(0, 7).map((key) => {
        return (
            <div key={key} className={style.inputField}>
                <input {...register(key, {
                    validate: {
                        notSpaceStart: value => (!/\s+/ig.test(value) || "Не должно быть пробела"),
                        rightName: name => (/^((?!https:\/\/)(?!http:\/\/))/ig.test(name) || key === 'website' || `Идентефикатор на ${key}`)
                    }
                })} className={`${style.contactField} ${errors[key] && style.invalidField}`} placeholder={key} name={key} />
                {errors[key] && <span className={style.error}>{errors[key].message}</span>}
            </div>
        )
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {contacts}
            <button className={style.saveBtn}>Save</button>
        </form>
    )
}

const ProfileSetting = (props) => {
    const submitProfileData = (value) => {
        props.updateProfile(value)
        props.setEditMode(false)
    }
    return (
        <div className={style.darkness}>
            <div className={style.contFormSett}>
                <SettingForm initialDataContact={props.initialDataContact} onSubmit={submitProfileData} />
            </div>
        </div>
    )
}
export default ProfileSetting