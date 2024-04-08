import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const FactDetails = () => {

    const { id } = useParams();
    const { data: fact, isPending, error } = useFetch('http://localhost:8000/facts/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/facts/' + fact.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="fact-details">
            { isPending && <div>Loading..</div> };
            { error && <div>{ error }</div> };
            { fact && (
                <article>
                    <h2>{ fact.title }</h2>
                    <div>{ fact.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
};

export default FactDetails;