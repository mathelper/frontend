import React from 'react';
import { Link } from 'react-router-dom';

const FactList = ({ facts }) => {

    return (
        <div className="fact-list">
            {facts.map((fact) => (
                <div className="fact-preview" key={ fact.id }>
                    <Link to={`/facts/${ fact.id }`}>
                        <h2>{ fact.title }</h2>
                        <p>{ fact.body }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default FactList;