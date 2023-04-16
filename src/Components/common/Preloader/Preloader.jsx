import React from "react"
import img from './preloader-anime.gif'
import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={img}/>
        </div>
    )
}

export default Preloader
/* <div className={style.loaderCont}>
            <span>D</span>
            <span>I</span>
            <span>C</span>
            <span>K</span>
        </div> */