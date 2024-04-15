import React from 'react'
import useFetch from './useFetch';
import { useHistory, useParams } from 'react-router-dom';

const FactDetails = () => {

    const { id } = useParams();
    const { data: fact, isPending, error } = useFetch(process.env.VITE_BASE_URL + id);
    const history = useHistory();

    const handleClick = () => {
        fetch(process.env.VITE_BASE_URL+ fact.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="fact-details">
            { isPending && <div>Loading..</div> }
            { error && <div>{ error }</div> }
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
