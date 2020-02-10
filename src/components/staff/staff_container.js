import { connect } from 'react-redux';
import { fetchStaff } from '../../actions/staff_actions.js';
import Staff from './staff.jsx';

const mapStateToProps = (state) => ({
    staff: state.staff
});

const mapDispatchToProps = dispatch => ({
    fetchStaff: () => dispatch(fetchStaff())
});

export default connect(mapStateToProps, mapDispatchToProps)(Staff);


