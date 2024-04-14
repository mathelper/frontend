import React from 'react';

const ThemeList = ({ theme }) => {

    return (
        <div className="theme-list">
            {facts.map((theme) => (
                <div key={ theme.id }>
                    <Link to={`/themes/${ theme.id }`}>
                        <h2>{ theme.title }</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ThemeList;