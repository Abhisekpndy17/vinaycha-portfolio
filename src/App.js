import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/one-header/Header';
import Home from './components/home-page/Home';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <Route path='/' exact component={Home}/>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
