import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';
import axios from 'axios'
  
  class RegisterForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async(err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            const ex_link = "https://cors-anywhere.herokuapp.com/";
            await axios.post(ex_link +'https://node-student.herokuapp.com/api/student/signup',{
              email: values.email,
              password: values.password,
              name: values.name,
              handphone: values.handphone,
              address: values.address,
            })
            .then((response) => {
              
              console.log(response);
              this.props.history.push('/login')
            })
            .catch(function (error) {
              console.log(error);
            });
          }
        });
      }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} style={{maxWidth:'300px'}} className="login-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input type="email" placeholder="email" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input  placeholder="Password" />
            )}
          </Form.Item><Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
          })(
            <Input placeholder="name" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('handphone', {
            rules: [{ required: true, message: 'Please input your handphone!' }],
          })(
            <Input type="number" placeholder="handphone" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please input your address!' }],
          })(
            <Input placeholder="address" />
          )}
        </Form.Item>
          <Form.Item>
            
            <Button type="primary" htmlType="submit" style={{width: '100%'}} className="login-form-button">
              Simpan
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const Register = Form.create({ name: 'register' })(RegisterForm);
  
  export default Register;