import * as StaffAPIUtil from '../util/staff_api_util.js';

export const RECEIVE_STAFF = 'RECEIVE_STAFF';

const receiveStaff = staff => ({
    type: RECEIVE_STAFF,
    staff
});

export const fetchStaff = () => dispatch => {
    let staffList = StaffAPIUtil.fetchStaff();
    return dispatch(receiveStaff(staffList));
}