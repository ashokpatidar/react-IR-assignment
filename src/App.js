import React from 'react';
import RepoList from './RepoList';


const GIT_HUB_BASE_URL = 'https://api.github.com/users/';

class Application extends React.Component {

    constructor(props) {
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
                return response.json()
            })
            .then((json) => {

                this.setState({ userInfo: json });
                this.getRepoData();
            }).catch((error) => {
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
                    this.setState({ repo: json });
                    return this.state.repo;
                })
        }

    };

    render() {
        let items;
        if (this.state.repo.length === 0) {
            items = <h1>No Repository Data Available</h1>;
        } else {
            items = <RepoList items={this.state.repo} />;
        }

        return (
            <div>
                <form>
                    <div className='searchPanel'><input className='searchText' type='text' ref='username' placeholder='Enter User Name ...' /><button className='findButton' onClick={this.findUser}>Search</button></div>
                </form>
                <div>
                    <div className='ProfilePicture'><img className="profile" src={this.state.userInfo.avatar_url || 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'} alt='myPic' /></div>
                    <div className='ProfileItem'>
                        <h1>Name :- {this.state.userInfo.name || this.state.userInfo.login || 'No Name'}</h1>
                        <h5>Location :- {this.state.userInfo.location || 'Location Not Available'}</h5>
                        <h5>Email :- {this.state.userInfo.email || 'Email not Available'}</h5>
                        <h5>Followers :- {this.state.userInfo.followers || 'No Followers'}</h5>
                        <h5>Following :- {this.state.userInfo.following || 'No One Following'}</h5>
                    </div>
                    <div className="clear-fl"></div>
                </div>
                <div className="Table">
                    {items}

                </div>
            </div>
        );
    }
}

export default Application;





