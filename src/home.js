import React from 'react';
import style from './index.css';

const Home = () => {
    return (
            <div className={style.app}>
                <h1>Git Repository Finder Application !!!</h1>
                <p className={style['para-text']}>This application is about finding git repository of any user </p>
            </div>
    );
};

export default Home;