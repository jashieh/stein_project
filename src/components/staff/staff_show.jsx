import React from 'react';
import ProfilePicture from '../stylesheets/assets/profile_picture.png';
import Phone from '../stylesheets/assets/phone.svg';
import Mail from '../stylesheets/assets/mail.svg';

class StaffShow extends React.Component {
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

        let birthday = new Date(this.props.staff.birthday);

        return(
            <div className="staff-show-container">
                <div className="staff-show-left">
                    <div className={`location ${location}`}>
                        {location}
                    </div>
                    <img src={ProfilePicture} alt=""/>
                </div>

                <div className="staff-show-right">
                    <div className="top">
                        <div className="title">
                            {this.props.staff.name}
                        </div>
                        <div className="job">
                            {this.props.staff.jobTitle}
                        </div>
                        <div>
                            Birthday: {birthday.toDateString()}
                        </div>
                    </div>
                    <div className="mid">
                        <div className="mid-item">
                            <img src={Mail} alt=""/>
                            {this.props.staff.email}
                        </div>
                        <div className="mid-item">
                            <img src={Phone} alt=""/>
                            {this.props.staff.mobile}
                        </div>

                    </div>
                    <div className="bot">
                        {this.props.staff.jobDescription}
                    </div>

                </div>

            </div>
        )
    }
}

export default StaffShow;