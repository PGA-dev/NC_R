import CampsitesList from './features/campsites/CampsitesList';
//import { CAMPSITES } from './app/shared/CAMPSITES';
import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
//import { Container, Navbar, NavbarBrand } from 'reactstrap';
//import NucampLogo from './app/assets/img/logo.png';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
