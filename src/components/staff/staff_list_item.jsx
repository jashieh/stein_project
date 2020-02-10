import React from 'react';
import ProfilePicture from '../stylesheets/assets/profile_picture.png';

class StaffListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let location = "";

        if(this.props.idx % 4 === 3) {
            location = "MAN";
        } else if (this.props.idx % 4 === 2) {
            location = "LOND";
        } else if (this.props.idx % 4 === 1) {
            location = "NYC";
        } else {
            location = "SAN";
        }

        return(
            <li onClick={()=>this.props.openModal({staff: this.props.staff, idx: this.props.idx})}>
                <div className="list-item-upper">
                    <div className={`location ${location}`}>
                        {location}
                    </div>
                    <img src={ProfilePicture} alt="" className={location+"2"}/> 
                </div>

                <div className="list-item-lower">
                    <div className="list-name">
                        {this.props.staff.name}
                    </div>
                    <div className="list-job">
                        {this.props.staff.jobTitle}
                    </div>
                </div>
            </li>
        )
    }
}

export default StaffListItem;