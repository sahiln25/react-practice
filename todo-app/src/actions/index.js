import { ADD_TODO, DELETE_TODO, CLEAR_TODO } from '../constants';

export const addTodo = (text, dueDate) => {
    const action = {
        type: ADD_TODO,
        text,
        dueDate
    };
    console.log("actions", action);
    return action;
};

export const deleteTodo = (id) => {
    const action = {
        type: DELETE_TODO,
        id
    };
    console.log("deleting in actions", action);
    return action;
};

export const clearTodo = () => {
    const action = {
        type: CLEAR_TODO
    };
    console.log("clearing todos", action);
    return action;
};