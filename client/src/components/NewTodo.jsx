import React, { useState } from 'react';

const NewTodo = () => {

    const [description, setDescription] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            window.location = '/';
        } catch (error) {
            console.log(error);
        }
            
        }

    return (
        <form onSubmit={onSubmitForm}>
            <input type="text"
                placeholder="Type a task..."
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>

    )
}

export default NewTodo
