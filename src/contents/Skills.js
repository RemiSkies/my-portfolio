import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['Html','CSS','JavaScript','MySQL','PHP','REACT JS','WordPress','Microsoft Office Excel','Microsoft Office Word','Microsoft Office Outlook',
            'Microsoft Office PowerPoint','Adobe Dreamweaver','Adobe Premiere','Adobe Photoshop']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    