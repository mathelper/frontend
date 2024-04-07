import React from 'react'
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [facts, setFacts] = useState([
        { title: 'Algebra', body: '2 + 2 = 4', id: 1 },
        { title: 'Geometry', body: 'The perimeter of a square is 4', id: 2 },
        { title: 'Trigonometry', body: 'sin(90) = 1', id: 3 },
        { title: 'Combinatorics', body: 'C(3, 2) = 3', id: 4 }
    ]);

    const handleDelete = (id) => {
        const newFacts = facts.filter(fact => fact.id !== id);
        setFacts(newFacts);
    }
    
    useEffect(() => {
        console.log('use effect ran');
    });

    return (
        <div className="home">
            <BlogList facts={facts} title="All Facts" handleDelete={handleDelete}/>
            <BlogList facts={facts.filter((fact) => fact.title === 'Algebra')} title="Algebra Facts"/>
        </div>
    );
}   

export default Home;