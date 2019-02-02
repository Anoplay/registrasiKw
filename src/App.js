import React, { Component } from 'react';
import logo from './logo.svg';
import "antd/dist/antd.css";
import './App.css';
import Students from './components/Students'
import Header from './components/Header'
import Register from './components/Register'

class App extends Component {
  render() {

    // const name = "Anoplay"
    // const sayHello = false
    // const showCount = true
    // const belum = "belum dihitung"
    // const num1 = 2
    // const num2 = 3

    // let math;

    // if(showCount){
    //   math=<h1> {num1} + {num2} = {num1 + num2}</h1>
    // }else{
    //   math = null
    // }

    return (
      <div>
        <Register/>

        {/* <p> 1 + 1 = {1 + 1}</p>
        <p>hello, {name}</p>
        {sayHello? <p>hello condition, {name}</p> : null}
        {showCount? <p>{1 + 1}</p> : <p> {belum}</p>}
        {math} */}
        {/* <Header
          title = "Students' list tea"
        />
        <Students 
          name = "Anoplay"
          email = "Anoplay@gmail.com"
          phone = "08777777123"
        />
        <Students 
          name = "Yada"
          email = "yada@gmail.com"
          phone = "08888888123"
        />
        <Students 
          name = "SwilleRZ"
          email = "sqwillerz@gmail.com"
          phone = "08999999123"
        /> */}
      </div>
    );
  }
}

export default App;
