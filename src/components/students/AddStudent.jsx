import React, { Component } from 'react';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'
import { connect } from 'react-redux';
import { addStudent } from '../../store/actions/studentAction';
class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : '',
            phone : '',
            errors : {}
          }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state)
        const {name, email, phone} = this.state
       

        const newStudent = {
            name,email,phone
        }

        const res = await axios
        this.props.addStudent(newStudent)
        // const add = await
        // axios.post('https://jsonplaceholder.typicode.com/users',newStudent)
        // .then(res =>  dispatch({type:'ADD_STUDENT', payload:res.data}) )

        if(name === ''){
            this.setState({errors : {name: 'name is required'}})
        }

        if(email === ''){
            this.setState({errors : {email: 'email is required'}})
        }

        if(phone === ''){
            this.setState({errors : {phone: 'phone is required'}})
        }

        this.setState({
            name : '',
            email : '',
            phone : '',
        })

        this.props.history.push('/')
    }


    onChange = e => this.setState({
        [e.target.name] : e.target.value
    })

    render() { 
        const {name, email, phone, errors} = this.state
        return (
            <div>
                <div>Add Item</div>
                {/* <form onSubmit={this.onSubmit.bind(this)}> */}
                <form onSubmit={this.onSubmit.bind(this)}> 
                    <TextInputGroup
                        label='Name'
                        name = 'name'
                        placeholder = 'Enter name'
                        value = {name}
                        onChange = {this.onChange}
                        type='text'
                        error = {errors.name}
                    />
                    <TextInputGroup
                        label='Email'
                        name = 'email'
                        placeholder = 'Enter email'
                        value = {email}
                        onChange = {this.onChange}
                        type='email'
                        error = {errors.email}
                    />
                    <TextInputGroup
                        label='Phone'
                        name = 'phone'
                        placeholder = 'Enter phone'
                        value = {phone}
                        onChange = {this.onChange}
                        type='text'
                        error = {errors.phone}
                    />
                    <input type='submit' value='Add' />
                </form>
            </div>
        )
    }
}
 
// export default AddStudent;
export default connect(null, { addStudent })(AddStudent)