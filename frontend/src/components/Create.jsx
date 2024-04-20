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

        fetch(import.meta.env.VITE_BASE_URL, {
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
            <h2>Добавить факт</h2>
            <form onSubmit={handleSubmit}>

                <label>Название:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Описание:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Тема:</label>
                <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                >
                    <option value="general">Другое</option>
                    <option value="combinatorics">Комбинаторика</option>
                    <option value="algebra">Алгебра</option>
                    <option value="geometry">Геометрия</option>
                    <option value="trigonometry">Тригонометрия</option>
                </select>

                { !isPending && <button>Добавить факт</button> }
                { isPending && <button>Факт добавляется</button> }

            </form>
        </div>
    )
    
}

export default Create;
