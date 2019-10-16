import React, { useState } from 'react'

const EditForm = props => {
    // в качестве начального аргумента передаем
    // пользователя, которого собираемся редактировать
    const [todo, setTodo] = useState(props.currentTodo)

    const handleInputChange = event => {
        const { value, val } = event.target

        setTodo({ ...todo, [value]: val })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!todo.value) return

        // вызываем updateUser
        props.updateTodo(todo.id, todo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Change</label>
            <input
                type="text"
                name="name"
                value={todo.value}
                onChange={handleInputChange}
            />
            <button>Update </button>
            <button
                /* обновляем флаг editing, будет представлен в App позже */
                onClick={() => props.setEditing(false)}
                className="button muted-button">
                Cancel
            </button>
        </form>
    )
}

export { EditForm }