import React from "react"
import img from '../../../image/preloader-anime.gif'
import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={img}/>
        </div>
    )
}

export default Preloader