import React from "react";
import s from './Header.module.css'


const Header = () => {
    
    return <header className={s.header}>
    <img src={require('../../logo.png')}/>
    <p>Green House</p>
    </header>
}
export default Header;