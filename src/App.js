import React, { Component } from 'react';
import { Navbar, Footer } from './components';
import { Link } from 'react-router-dom';
import Routes from './Routes';

const appStyle = {
  textAlign: 'center',
  margin: '35px 35px 0 35px',
  fontSize: '80%',
  minWidth: '250px'
}

const headerStyle = {
  fontSize: '25px',
  height: '25px',
  marginBottom: '23px',
  minWidth: '200px',
  fontFamily: 'Montserrat, sans-serif',
  paddingBottom: '3px'
}

const subheaderStyle = {
  position: 'absolute',
  top: '60px',
  left: '0',
  right: '0',
  fontFamily: 'Homemade Apple, cursive',
  fontSize: '14px',
  margin: '0 35px',
  minWidth: '250px'
}

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <Link to='/'><h1 style={headerStyle}>Destin McMurry</h1></Link>
        <span style={subheaderStyle}>Full-Stack JavaScript Developer</span>
        <Navbar/>
        <Routes/>
        <Footer />
      </div>
    );
  }
}

export default App;