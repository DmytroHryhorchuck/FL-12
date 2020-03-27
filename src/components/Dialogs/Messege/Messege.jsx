import React from 'react'
import style from './Messege.module.css'


const Messege = (props) =>{
    return <div className={style.messege}>{props.messege}</div>
}
export default Messege



