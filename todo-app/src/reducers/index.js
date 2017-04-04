import { ADD_TODO, DELETE_TODO, CLEAR_TODO } from '../constants';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const todo = (action) => {
    const { text, dueDate } = action;
    return {
        id: Math.random(),
        text,
        dueDate
    };
};

const removeById = (state = [], id) => {
    const todos = state.filter(todo => todo.id !== id);
    console.log(todos);
    return todos;
};

const todos = (state = [], action) => {
    let todos = null;

    state = read_cookie('todos');

    switch(action.type) {
        case ADD_TODO:
            todos = [...state, todo(action)]; //ES6 trick. Spread operator
            bake_cookie('todos', todos);
            return todos;
        case DELETE_TODO:
            todos = removeById(state, action.id);
            bake_cookie('todos', todos);
            return todos;
        case CLEAR_TODO:
            delete_cookie('todos');
            return [];
        default:
            return state;
    }
};

export default todos;