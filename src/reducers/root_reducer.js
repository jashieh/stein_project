import { combineReducers } from 'redux';
import staff from './staff_reducer';
import modal from './modal_reducer';

const RootReducer = combineReducers({
    staff,
    modal
});

export default RootReducer;