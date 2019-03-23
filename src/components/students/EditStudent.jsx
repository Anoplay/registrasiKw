import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateStudent } from '../../store/actions/studentAction';

class EditStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {}

        }
    }

    async componentDidMount() {
        
        const {id} = this.props.match.params
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            this.setState({
                name: res.data.name,
                email: res.data.email,
                phone: res.data.phone,

            })
    }
    // fungsi onchange
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

 

 onSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        const { name, email, phone, errors } = this.state;
        if (name === '') {
            this.setState({ errors: { name: 'Name is Required' } })
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: 'Email is Required' } })
            return;
        }
        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is Required' } })
            return;
        }
        const { id } = this.props.match.params;
        console.log(id)
        const updateStudent = {
            name,
            email,
            phone,
            // errors,
        }
        this.props.updateStudent(id, updateStudent);
        // const res = await axios
        //     .patch(`https://jsonplaceholder.typicode.com/users/${id}`, updateStudent)
        // console.log('data : ')
        // console.log(res.data)
        // dispatch({ type: 'EDIT_STUDENT', payload: res.data })
        // axios('https://jsonplaceholder.typicode.com/users',
        //     {
        //         method: 'POST',
        //         body: JSON.stringify({ newStudent }),
        //         headers: { "Content-type": "application/json; charset=UTF-8" }
        //     }
        // )
        //     .then(res => dispatch({ type: 'ADD_STUDENT', payload: newStudent }))
        this.setState({
            name: '',
            email: '',
            phone: '',
            // errors: ''
        })
        // redirect to home
        this.props.history.push('/');
    }

    render() {
        // dispatch = melempar dari value
        const { name, email, phone, errors } = this.state;
        return (
        <div>
            <div>EDIT FORM</div>
            {/* <form onSubmit={this.onSubmit.bind(this, dispatch)}> */}
            <form onSubmit={this.onSubmit.bind(this)}> 
                <TextInputGroup
                    type='text'
                    label='Name'
                    name='name'
                    placeholder='Engter Name'
                    value={name}
                    onChange={this.onChange}
                    error= {errors.name}

                />
                <TextInputGroup
                    type='text'
                    label='Email'
                    name='email'
                    placeholder='Engter email'
                    value={email}
                    onChange={this.onChange}
                    error= {errors.email}
                />
                <TextInputGroup
                    type='text'
                    label='Phone'
                    name='phone'
                    placeholder='Engter Phone'
                    value={phone}
                    onChange={this.onChange}
                    error= {errors.phone}

                />
                
                <input type="submit" value="UPDATE" />
            </form>
        </div>
        )
    }
}

 // export default EditStudents;
 export default connect(null, { updateStudent })(EditStudents)