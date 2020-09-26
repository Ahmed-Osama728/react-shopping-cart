import React from 'react';
import Footer from './components/layOut/footer';
import Navbar from './components/layOut/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Navbar />
        <main>Product List</main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
