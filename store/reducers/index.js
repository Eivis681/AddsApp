import {userReducer} from './userReducer';
import {addReducer} from './addReducer';
import {userLogin} from './usersAuthReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    users: userReducer,
    adds: addReducer,
    login: userLogin,
});