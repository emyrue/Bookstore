import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <Link to="/"> Home </Link>
        <Link to="/categories"> Categories </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" />
      </Routes>
    </Router>
  );
}

export default App;
