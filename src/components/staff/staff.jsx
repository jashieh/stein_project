import React, {useState, useEffect} from 'react';
import StaffList from './staff_list.jsx';

const Staff = (props) => {
    const [staff, setStaff] = useState(props.staff);

    useEffect(() => {
        props.fetchStaff();
    },[]);

    return(
        <div className="staff-page">
            <div className="staff-title-container">
                <h1>
                    Staff Directory
                </h1>
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean euismod bibendum laoreet.
                </h2>
            </div>

            <div className="search-container">
                <div className="filter-title">
                    Filter colleagues
                </div>
                <div className="search-box">
                    <input type="text" className="input-field" placeholder="Search"/>
                </div>
            </div>

            <div className="staff-page-lower">
                <div className="staff-lower-title">
                    Showing {props.staff.length} colleague(s)
                </div>

                <StaffList staff={props.staff}/>
            </div>
            
        </div>
    );
}

export default Staff;

