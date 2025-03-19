import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Home from "./home"
import AboutMore from './aboutmore'

function App() {
   
   return(
   <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more" element={<AboutMore />} />

        
    </Routes>
    </Router>
   )
}

export default App;
