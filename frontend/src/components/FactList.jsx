import React from 'react';
import { Link } from 'react-router-dom';
import Latex from 'react-latex';

const FactList = ({ facts }) => {

    const getPreview = (text) => {
        return text.split(' ').slice(0, 18).join(' ') + '...';
    };

    return (
        <div className="fact-list">
            {facts.map((fact) => (
                <div className="fact-preview" key={ fact.id }>
                    <Link to={`/facts/${ fact.id }`}>
                        <h2>{ fact.title }</h2>
                        <p><Latex>{ getPreview(fact.body) }</Latex></p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default FactList;
