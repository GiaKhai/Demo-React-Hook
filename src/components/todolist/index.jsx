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
    return (
        <ul>
            {todo.map(todo => (
                <li key={todo.id}>{todo.content}</li>
            ))}
        </ul>
    )
}

export default TodoList;