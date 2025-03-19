import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


export default function AboutMore() {
   
    return(
        <div>
        <header>
        <div className="logo">
          <h1>Jadyn Coleman</h1>
          <p>Software Developer</p>
        </div>
         
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/"><button>Go back to main page</button></Link>
            </li>
          </ul>
        </nav>
        </header>
        <div className="abme">
      
      <div className="resume">
        Resume PDF
        <img src="JColemanResume.png" alt="resume" 
          style={{
            height:"800px",
            width:"auto",
            padding:"3px",
          }}
        />
      </div>
      <div className="abmoretxt">
        
      <p>Originally
      from West Palm Beach Florida, I have a strong passion for PC building
      and coding. Whether it's assembling computers from scratch or
      diving into new programming challenges, I love working with technology 
      and expanding my skills. Technology isn't just my field of study; it's 
      an art form. I enjoy problem-solving, learning 
      new concepts, and pushing the boundaries of what I can create. Let's connect 
      and talk tech!</p>
      </div>
        </div>
        </div>
       
       
        
    )
 }
 
