import React from 'react'

const BlogList = ({ facts, title, handleDelete}) => {

    return (
        <>
        <h2>{title}</h2>
        <div className="blog-list">
            {facts.map((fact) => (
                <div className="blog-preview" key={fact.id}>
                    <h2>{fact.title}</h2>
                    <p>{fact.body}</p>
                    <button onClick={() => handleDelete(fact.id)}>delete fact</button>
                </div>
            ))}
        </div>
        </>
    );
}

export default BlogList;