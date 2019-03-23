import React, { Component } from 'react';
import "antd/dist/antd.css";
import './App.css';
import Students from './components/students/Students'
import AddStudents from './components/students/AddStudent'
import EditStudents from './components/students/EditStudent'
import Categories from './components/Categories'
import Header from './components/Header'
import Register from './components/Register'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/Header';
import About from './components/pages/about'
import NotFound from './components/pages/notFound'
import EditStudent from './components/students/EditStudent';
import {Provider} from 'react-redux'
import store from './store/store'
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
      <Provider store={store}>
          <Router>
          <div>
            <NavBar tittle = "student list"/>
            <Switch>
              <Route exact path='/' component={Students}/>
              <Route exact path='/student/add' component={AddStudents}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/student/edit/:id' component={EditStudent}/>
              <Route component={NotFound}/>
            </Switch>
            {/* <AddStudents/> */}
            {/* <Students/> */}
            {/* <Categories /> */}
          </div>
        </Router>
      </Provider>
      
    );
  }
}

export default App;
