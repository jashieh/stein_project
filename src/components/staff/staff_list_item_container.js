import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions.js';
import StaffListItem from './staff_list_item.jsx';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
    openModal: (staff) => dispatch(openModal('staff', staff))
});

export default connect(mapStateToProps, mapDispatchToProps)(StaffListItem);


