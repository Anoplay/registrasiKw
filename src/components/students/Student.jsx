import React, { Component } from 'react';
import { Card, List , Icon } from 'antd';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteStudent } from '../../store/actions/studentAction';
class Student extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isToggleOn: true
         }   
    }
    onShowClick = e =>{
        this.setState({
            isToggleOn : !this.state.isToggleOn
        })
    }

    deleteData = (id) => {
        this.props.deleteStudent(id)
        console.log(id);
    }

    // onDelete = (id,dispatch) => {
    //     axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then(res => dispatch({type:'DELETE_STUDENT', payload:id}))
    // }
    render() { 
        const {name, email, phone, id} = this.props.student
        const {isToggleOn} = this.state
        return (  
            <div style={{backgroundColor:"#ECECEC", padding:"30px"}}>
                <Card bordered  style={{ width: 800 }}>
                    <div style={{display:"flex"}}>
                        <h1>{name}</h1>
                        <Icon onClick={this.onShowClick} type="down" theme="outlined" style={{ fontSize: '38px', color: '#08c' }} />
                        <Link to={`/student/edit/${id}`}><Icon type="edit" theme="outlined" style={{ fontSize: '38px', color: '#08c' }} /></Link>
                        <Icon type="cross" theme="outlined" style={{ fontSize: '38px', color: 'red' }} onClick={this.deleteData.bind(this, id)} />
                    </div>
                    {isToggleOn? 
                    <List>
                        <li>{email}</li>
                        <li>{phone}</li>
                    </List> 
                    : null}
                    
                </Card>
                
            </div>
        )
    }
}
 
// export default Student;
export default connect(null, { deleteStudent })(Student)