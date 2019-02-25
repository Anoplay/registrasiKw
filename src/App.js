import React, { Component } from 'react';
import "antd/dist/antd.css";
import './App.css';
import Students from './components/Students'
import Categories from './components/Categories'
import Header from './components/Header'
import Register from './components/Register'
import {Provider} from './context'
import NavBar from './components/Header';
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
          <Provider>
              <div>
                <NavBar tittle = "student list"/>
                <Categories />
              </div>
          </Provider>
    );
  }
}

export default App;
