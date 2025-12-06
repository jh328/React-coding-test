import React, { useState } from 'react';

export const Q5_search = ({ items }) => {
    const [query, setQuery] = useState('');

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <h3>search react</h3>

            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="검색.."
                style={{
                    color: 'black'
                }}
            />

            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};