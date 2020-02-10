import { RECEIVE_STAFF } from '../actions/staff_actions.js';

const StaffReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_STAFF:
            return Object.assign([], action.staff);
        default:
            return state;
    }
};

export default StaffReducer;