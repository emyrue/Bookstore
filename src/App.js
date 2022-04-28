import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Error from './pages/Error';
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
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
