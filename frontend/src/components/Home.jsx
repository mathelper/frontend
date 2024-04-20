import React from 'react'
import FactList from './FactList';
import useFetch from './useFetch';

const Home = () => {

    const { data: facts, isPending, error } = useFetch(import.meta.env.VITE_BASE_URL);

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Загрузка..</div> }
            { facts && <FactList facts={facts} title="Факты" /> }
        </div>
    );
}   

export default Home;
