import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <p>Страница не существует</p>
            <Link to="/">Назад на главную</Link>
        </div>
    );
}

export default NotFound;
