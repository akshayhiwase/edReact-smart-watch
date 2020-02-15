import React from 'react';
import navcss from './navbar.module.css'

const navbar = (props) => {
    return (
        <div className={navcss.navbar}>
            {props.children}

        </div>
    )
}

export default navbar;