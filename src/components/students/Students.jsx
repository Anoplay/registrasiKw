import React, { Component } from 'react';
import Student from './Student';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { GET_STUDENTS } from '../../store/actions/type';
import {getStudents} from '../../store/actions/studentAction'
class Students extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.getStudents()
    }
    render() { 
        const {students} = this.props
        return (
            <React.Fragment>
                {students.map(student => (
                    <Student
                        key = {student.id}
                        student = {student}
                        
                    />
                ))}
            </React.Fragment>
            
        );
    }
}

 
const mapStateToProps = (state) => ({
    students : state.student.students
})

// const mapDispatchTOoProps = (dispatch) =>({
//     getStudent : () => dispatch({type: GET_STUDENTS})
// })
export default connect(mapStateToProps,{getStudents})(Students);