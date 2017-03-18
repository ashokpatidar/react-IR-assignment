import React, { Component } from 'react';
import style from './index.css'
import RepoList from './RepoList';


const GIT_HUB_BASE_URL = 'https://api.github.com/users/';
let isUserFound = false;
let isRepoFound = false;

class Find extends React.Component {

    constructor(props) {
        isUserFound = false;
        isRepoFound = false;
        super(props);
        this.state = {
            userInfo: {},
            repo: []
        };
        this.findUser = this.findUser.bind(this);
        this.getRepoData = this.getRepoData.bind(this);
    }

    findUser(e) {
        e.preventDefault();
        this.setState({ userInfo: {} })
        var url = this.refs.username.value;
        this.refs.username.value = '';
        this.fetchProfileInfomation(GIT_HUB_BASE_URL + "" + url);
    }

    fetchProfileInfomation(url) {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json()
            })
            .then((json) => {
                isUserFound = true;
                this.setState({ userInfo: json });
                this.getRepoData();
            }).catch((error) => {
                isUserFound = false;
                //isRepoFound = false;
                console.error(error);
            });;
    }

    getRepoData() {
        if (this.state.userInfo.repos_url) {
            fetch(this.state.userInfo.repos_url)
                .then((response) => {
                    return response.json()
                })
                .then((json) => {
                    isRepoFound = true;
                    this.setState({ repo: json });

                    return this.state.repo;
                })
        }

    };

    render() {
        let items;
        let profile;

        if (isUserFound) {
            profile = <div>
                <div className={style.ProfilePicture}><img className={style.profile} src={this.state.userInfo.avatar_url || 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'} alt='myPic' /></div>
                <div className={style.ProfileItem}>
                    <h1>Name :- {this.state.userInfo.name || this.state.userInfo.login || 'No Name'}</h1>
                    <h5>Location :- {this.state.userInfo.location || 'Location Not Available'}</h5>
                    <h5>Email :- {this.state.userInfo.email || 'Email not Available'}</h5>
                    <h5>Followers :- {this.state.userInfo.followers || 'No Followers'}</h5>
                    <h5>Following :- {this.state.userInfo.following || 'No One Following'}</h5>
                </div>
                <div className={style['clear-fl']}></div>
            </div>;
        } else {
            profile = ''
        }

        if (isRepoFound) {

            items = <RepoList items={this.state.repo} />;
        } else {
            items = <h1>No Repository Data Available</h1>;
        }
        return (
            <div>
                <div className={style.app}>
                    <form>
                        <div className={style.searchPanel}><input className={style.searchText} type='text' ref='username' placeholder='Enter User Name ...' /><button className={style.findButton} onClick={this.findUser}>Search</button></div>
                    </form>
                    {profile}

                    <div className={style.Table}>
                        {items}
                    </div>
                </div>
            </div>
        );
    }
}

export default Find;