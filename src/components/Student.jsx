import React, { Component } from 'react';
import { Card, List , Icon } from 'antd';
import {Consumer} from '../context'
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

    onDelete = (id,dispatch) => {
       dispatch({type:'DELETE_STUDENT', payload:id})
    }
    render() { 
        const {name, email, phone, id} = this.props.student
        const {isToggleOn} = this.state
        return (  
            <Consumer>
                {value =>{
                const {dispatch} = value
                    return(
                        <div style={{backgroundColor:"#ECECEC", padding:"30px"}}>
                            <Card bordered  style={{ width: 800 }}>
                                <div style={{display:"flex"}}>
                                    <h1>{name}</h1>
                                    <Icon onClick={this.onShowClick} type="down" theme="outlined" style={{ fontSize: '38px', color: '#08c' }} />
                                    <Icon onClick={this.onDelete.bind(this, id, dispatch)} type="cross" theme="outlined" style={{ fontSize: '38px', color: 'red' }} />
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
                }}
            </Consumer>
            
        );
    }
}
 
export default Student;