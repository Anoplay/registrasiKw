import React, { Component } from 'react';
import { Row, Col, Form, Icon, Input, Button, Checkbox, } from 'antd';

import Registerpict from '../Assets/pict.jpeg';
import Registericon from '../Assets/icon.jpeg';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return (  
            <div>
                <Row>
                    <Col span={14}>
                        <img src={Registerpict} style={StylingHeader} alt="bgImg" />
                    </Col>
                    <Col span={10}>
                        <Row type="flex" justify="center" style={space1}>
                            <Col >
                                <img src={Registericon} alt="bgImg" />
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style={space1}>
                            <Col >
                                <h2 style={{color:'#007E80'}}>Daftar Sekarang</h2>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style={space2}>
                            <Col >
                            <Form>
                                <div>
                                <Input style={textbox} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                </div>
                                <div style={space3} >
                                <Input style={textbox} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                                </div>
                                <div style={space3} >
                                <Input.Password style={textbox} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Passowrd" />
                                </div>
                            </Form>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style={space2}>
                            <Col>
                                <div style={describeStyling}>
                                    <p>
                                    Dengan Melakukan Pendaftaran, saya setuju dengan <span style={redText}>Kebijakan Privasi</span> dan <span style={redText}>Syarat & Ketentuan</span> monggopesen.com
                                    </p>
                                </div>
                                
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style={space2}>
                            <Col >
                                <Button style={daftar} type="primary">Daftar</Button>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style={space4}>
                            <Col style={line}>
                            </Col>
                            <Col style={{lineHeight:"1px", padding :"0 4px 0 4px", color:"grey"}}>
                                <p>Daftar Sekarang</p>
                            </Col>
                            <Col style={line}>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style={space3}>
                            <Col style={{paddingRight:'4px' }}>
                                <Button icon="google" style={{ color: 'rgba(0,0,0,.25)', width:'160px', height:'48px' }} >Google</Button>
                            </Col>
                            <Col style={{ paddingLeft:'4px'}}>
                                <Button icon="facebook" style={{ color: 'rgba(0,0,0,.25)',width:'160px', height:'48px' }} >Facebook</Button>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" style={space3}>
                            <Col >
                                <p>Sudah punya akun monggopesen? <span style={redText}>Masuk</span></p>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}

const StylingHeader ={
    height: '900px',
    width: '786px'
}

const line = {
    height : "1px",
    width : "90px",
    backgroundColor:"grey",
    color : "grey"
}

const space1 ={
    paddingTop :"64px"
}

const space2 ={
    paddingTop :"32px"
}

const space3 ={
    paddingTop :"16px"
}

const space4 ={
    paddingTop :"20px"
}

const describeStyling= {
    width:"360px",
}

const redText= {
    color:"red",
}

const textbox= {
    height: '48px',	
    width: '360px',	
    borderRadius:' 4px',	
    backgroundColor: '#007E80'
}

const daftar= {
    height: '48px',	
    width: '360px',	
    borderRadius:' 4px',	
    backgroundColor: '#007E80'
}

 
export default Register;