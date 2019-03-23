import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import { authLogin } from '../../store/actions/authAction';
  
  class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields(async (err, values) => {
        if (!err) {
        //   console.log('Received values of form: ', values);
        const login = this.props.authLogin(values)
        if(login){
            this.props.history.push('/')
        }
        //   this.props.authLogin(values)
        //   const ex_link = "https://cors-anywhere.herokuapp.com/";
        //   await axios.post(ex_link +'https://node-student.herokuapp.com/api/student/signin',{
        //     email: values.userName,
        //     password: values.password
        //   })
        //   .then(function (response) {
        //     // localStorage.setItem('token', response.data.token);
        //     // Storage.storeData('token', response.data.token);
        //     console.log(response);
        //     this.props.history.push('/')
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        }
      });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} style={{maxWidth:'300px'}} className="login-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{width: '100%'}} className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
  
//   export default WrappedNormalLoginForm;
export default connect(null, { authLogin })(WrappedNormalLoginForm)