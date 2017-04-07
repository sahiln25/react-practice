import { combineReducers } from 'redux';
import user from './user';
import goals from './goals';
import completedGoals from './completed-goals';

export default combineReducers({
    user,
    goals,
    completedGoals
});