import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//import * as $ from 'jquery/dist/jquery.js'
import 'popper.js'
import FormEmpresa from './views/FormEmpresa'


export class App extends Component {
  
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <FormEmpresa />
          </div>
        </div> 
        
      </div>
      
      
    )
  }
}

export default App

