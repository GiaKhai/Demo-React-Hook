import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todo: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProp = {
    todo: [],
    onTodoClick: null,
}

function TodoList(props) {
    const { todo, onTodoClick } = props;
    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }
    return (
        <ul>
            {todo.map(todo => (
                <li
                    key={todo.id}
                    onClick={() => handleClick(todo)}
                >
                    {todo.content}
                </li>
            ))}
        </ul>
    )
}

export default TodoList;