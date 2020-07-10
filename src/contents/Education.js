import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
                <Widecard title="Associates in Web Design &nbsp; Web Development" where="Wake Technical Community College"
                from="August 2018" to="Present" />

                <Widecard title="Associates in Business Administration" where="Wake Technical Community College"
                from="August 2016" to="May 2018" />   

                <Widecard title="High School Diploma" where="Cary High School"
                from="August 2008" to="June 2012" /></div>
            )
        }
    }
    
export default Education
    