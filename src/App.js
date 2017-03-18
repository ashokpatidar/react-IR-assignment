import React from 'react';
import Links from './links';
import Home from './home';
import style from './index.css';
import Find from './find'
import homeIcon from './home.png'


import createBrowserHistory from 'history/createBrowserHistory'

import {
    BrowserRouter as Router,
    Route,
    NavLink, Redirect, Switch, IndexRoute
} from 'react-router-dom';

class Application extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <Router history={createBrowserHistory}>
                    <div>
                        <header><Links /></header>
                        <div className={style.container}>
                            <Switch>
                                <Route exact={true} path="/" component={Home} ></Route>
                                <Route path="/find" component={Find} ></Route>
                                <Route render={() => <h1>Page not found</h1>}></Route>
                            </Switch>
                        </div>
                        <footer>
                            <h3>What is Lorem Ipsum?</h3>
                            <p className={style['para-text']}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </footer>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Application;