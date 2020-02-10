import React from 'react';
import StaffListItemContainer from './staff_list_item_container.js';

class StaffList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let staffList = this.props.staff.map((staff, i) => (
            <StaffListItemContainer staff={staff} idx={i}/>
        ));
        

        return(
            <ul className="staff-list-container">
                { staffList }
            </ul>
        )
    }
}

export default StaffList;