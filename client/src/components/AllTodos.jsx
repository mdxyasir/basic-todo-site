import React, { useEffect, useState } from 'react'

const AllTodos = () => {

    const [todos, setTodos] = useState([])

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE',
            })

            setTodos(todos.filter(todo => todo.id !== id))

        } catch (error) { console.log(error) }  
    }

    const getTodos = async () => {
        try {

            const response = await fetch('http://localhost:5000/todos')
            const jsonTasks = await response.json()

            setTodos(jsonTasks);

        } catch (error) { console.log(error) } 
    }

    useEffect(() => {
        getTodos()
    }, []);

    return (
        <table>
            <tbody>
                {todos.map(todo => (
                    <>
                    <tr key={todo.id}>
                        <td>• {todo.description}</td>
                        <td><button class="delete" onClick={() => { deleteTodo(todo.id) }}>Delete</button></td>
                    </tr>
                    </>
                ))}
            </tbody>
        </table>
    )
}

export default AllTodos
