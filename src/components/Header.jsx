import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom';
import { authLogout } from '../store/actions/authAction'
import {connect} from 'react-redux';
const { Header} = Layout;




const NavBar = (props) => {
    const { isAuth } = props.auth
    const { authLogout } = props
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
                <Menu.Item onClick={ isAuth ? () => authLogout() : () => {}} key="3"><Link to={isAuth ? "/login" : "/login"}>{ isAuth ? "Logout" : "Login" }</Link></Menu.Item>
                <Menu.Item><Link to='/register'>Register</Link></Menu.Item>
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

const mapStateToProps = state => ({
    auth: state.auth.auth
});

// export default NavBar;
export default connect(mapStateToProps, { authLogout })(NavBar)