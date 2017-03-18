import React from 'react';
import style from './index.css';
import { Route, Link } from 'react-router-dom';
import RepoDetails from './repo-detail';

class RepoList extends React.Component {

    render() {
        const rowItems = this.props.items;
        const rows = rowItems.map((row, index) =>
            <div className={style.Row} key={row.id}>
                <div className={style.Cell1}>
                    <p>{index + 1}</p>
                </div>
                <div className={style.Cell2}>
                    <Link to={`/find/` + row.name}><p>{row.name}</p></Link>

                    
                </div>
                <div className={style.Cell3}>
                    <p>{row.language}</p>
                </div>
            </div>
        );
        return (
            <div>
            <Route
                        path={`/find/:section`}
                        render={({match}) => <h2>{match.params.section}</h2>} />
                <div className={style.Row}>
                    <div className={style.Cell1 + ' ' + style.Heading}>
                        <p>S.N.</p>
                    </div>
                    <div className={style.Cell2 + ' ' + style.Heading}>
                        <p>Name</p>
                    </div>
                    <div className={style.Cell3 + ' ' + style.Heading}>
                        <p>Language</p>
                    </div>
                </div>
                <div>
                    <div>{rows}</div>
                </div>
            </div>
        );
    }

}

export default RepoList;