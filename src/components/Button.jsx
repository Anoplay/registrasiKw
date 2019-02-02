import React, { Component } from 'react';
import {Button } from 'antd';
const Button = (props) => {
    return (  
        <Row>
            <Col span={6}>
                <Button>{props.google}</Button>
            </Col>
            <Col span={6}>
                <Button>{props.google}</Button>
            </Col>
        </Row>
    );
}
 
export default Button;  