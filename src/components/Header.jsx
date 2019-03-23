import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom'
const { Header} = Layout;


const NavBar = (props) => {
    return (  
        <Layout className="layout">
            <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">{props.title}</Menu.Item>
                <Menu.Item key="2"><Link to='/'>Home</Link></Menu.Item>
                <Menu.Item><Link to='/student/add'>Add Student</Link></Menu.Item>
                <Menu.Item><Link to='/about'>About</Link></Menu.Item>
            </Menu>
            </Header>
        </Layout>
    );
}
 
Header.defaultProps = {
    title: "Students' List"
}

const StylingHeader ={
    color: 'green',
    fontSize : '10px'
}

export default NavBar;