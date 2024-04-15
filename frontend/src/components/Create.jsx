import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [theme, setTheme] = useState('algebra');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const fact = { title, body, theme };

        setIsPending(true);

// 'http://localhost:8000/facts'

        fetch(process.env.VITE_BASE_URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fact)
        }).then(() => {
            console.log('new fact added');
            setIsPending(false);
        });
        history.push('/');
    }

    return (
        <div className="create">
            <h2>Add a New Fact</h2>
            <form onSubmit={handleSubmit}>

                <label>Fact title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Fact body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Fact theme:</label>
                <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                >
                    <option value="general">General</option>
                    <option value="combinatorics">Combinatorics</option>
                    <option value="algebra">Algebra</option>
                    <option value="geometry">Geometry</option>
                    <option value="trigonometry">Trigonometry</option>
                </select>

                { !isPending && <button>Add Fact</button> }
                { isPending && <button>Adding Fact</button> }

            </form>
        </div>
    )
    
}

export default Create;
