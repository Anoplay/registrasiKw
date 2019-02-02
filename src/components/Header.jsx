import React, { Component } from 'react';
import { Row, Col } from 'antd';

const Header = (props) => {
    return (  
        <div>
            {/* <h1 className='header'>{props.title}</h1> */}
            <Row>
                <Col span={6}>
                    <h1 style={StylingHeader}>{props.title}</h1>
                </Col>
                <Col span={6}>
                    <h1>Home</h1>
                </Col>
            </Row>
        </div>
    );
}
 
Header.defaultProps = {
    title: "Students' List"
}

const StylingHeader ={
    color: 'green',
    fontSize : '10px'
}

export default Header;