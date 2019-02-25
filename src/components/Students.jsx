import React, { Component } from 'react';
import Student from './Student.jsx';
import {Consumer} from '../context'
class Students extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (  
            <Consumer>
                {value =>{
                    const {students} = value
                    return(
                        <div>
                            {students.map(student => (
                                <Student
                                    key = {student.id}
                                    student = {student}
                                    
                                />
                            ))}
                        </div>
                    )
                }}
            </Consumer>
            
        );
    }
}

 
export default Students;