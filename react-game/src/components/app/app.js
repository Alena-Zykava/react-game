import React, {Component} from 'react';
import Title from './../title'
import Cards from './../cards'
import Footer from './../footer'

import './app.scss';


class App extends Component {
    render() {
      return (
          <div className = 'app'>
            <Title />
            <Cards /> 
            <Footer />
          </div>          
      ) 
    }     
}

export default App