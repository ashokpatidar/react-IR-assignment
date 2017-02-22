import React from 'react';

class RepoList extends React.Component {
    
    render() {
        const rowItems = this.props.items;
        const rows = rowItems.map((row, index) =>
            <div className="Row" key={row.id}>
                <div className="Cell1">
                    <p>{index + 1}</p>
                </div>
                <div className="Cell2">
                    <p>{row.name}</p>
                </div>
                <div className="Cell3">
                    <p>{row.language}</p>
                </div>
            </div>
        );
        return (
            <div>
                <div className="Row">
                    <div className="Cell1 Heading">
                        <p>S.N.</p>
                    </div>
                    <div className="Cell2 Heading">
                        <p>Name</p>
                    </div>
                    <div className="Cell3 Heading">
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