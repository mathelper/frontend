import React from 'react'
import FactList from './FactList';
import useFetch from './useFetch';

const Home = () => {

    const { data: facts, isPending, error } = useFetch('http://localhost:8000/facts');

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading..</div> }
            { facts && <FactList facts={facts} title="All Facts" /> }
        </div>
    );
}   

export default Home;