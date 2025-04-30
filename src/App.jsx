import logo from './logo.svg';
import { HashRouter as Router, Route, Routes, Link, HashRouter } from "react-router-dom";
import './App.css';
import Home from './home';
import AboutMore from './aboutmore';

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="" element={<Home />}/>
      <Route path="/AboutMore" element={<AboutMore/>}/>
    </Routes>
    </HashRouter>
  );
}

export default App;
