import React from 'react';
import style from './index.css';
import { NavLink } from 'react-router-dom';

const Links = () => {
    return (
        <div>
            <nav className={style.nav}>
                <NavLink to="/" exact activeClassName={style.active} className={style.navItem}>Home</NavLink>
                <NavLink activeClassName={style.active} className={style.navItem} to="/find">Find</NavLink>
            </nav>
        </div>
    );
};

export default Links;