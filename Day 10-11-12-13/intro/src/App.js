import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Portfolio.css';
import Nav from './components/Portfolio/Nav';
import Main from './components/Portfolio/Main';
import Footer from './components/Portfolio/footer';
import './App.css'
import QuoteFetcher from './components/QuoteFetcher';

function App() {
  return (
    <Router>
      <div className="Container">
            <Nav />
            <Main/>
            <QuoteFetcher/>
            <Footer/>
      </div>
    </Router>
  );
}

export default App;
