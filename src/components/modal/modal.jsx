import React from 'react';
import { closeModal } from '../../actions/modal_actions.js';
import { connect } from 'react-redux';
import StaffShow from '../staff/staff_show.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { modal, closeModal } = this.props;

    if (!modal) {
      return null;
    }

    let component;
    switch (modal.type) {
        case 'staff':
            component = <StaffShow staff={modal.data.staff} idx={modal.data.idx} />;
            break;
      default:
        return null;
    }
    return (
      <div className="modal-background" 
        onClick={closeModal} 
        tabIndex="0"
        ref={(modalDiv) => (this.modalDiv = modalDiv)}
      >
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);