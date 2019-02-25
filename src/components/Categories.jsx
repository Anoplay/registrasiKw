import React, { Component } from 'react';
import Category from './Category.jsx';
import {Consumer} from '../context'
class Categories extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (  
            <Consumer>
                {value =>{
                    const {categorydatas} = value
                    return(
                        <div>
                            <Category
                                data = {value.categorydatas}
                                
                            />
                        </div>
                    )}}
                    
            </Consumer>
            
        );
    }
}

 
export default Categories;