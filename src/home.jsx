import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import './index.css';
import { HashLink } from 'react-router-hash-link';


export default function Greetings() {
  const greetings = [
    "Hello!",
    "Thank you for visiting my website!",
    "I am excited to work with you!",
  ];
  const [currentText, setCurrentText] = useState("");
  const [i, setI] = useState(0); // Index of the current greeting
  const [j, setJ] = useState(0); // Index of the current character

  const handleform = (event)=>{
    event.preventDefault();
    emailjs.sendForm('service_6h6t5le', 'template_tc2hsfi', event.target, 'IZSWjZbHgna1AgSuz');
    alert("submitted")
}

  useEffect(() => {
    const typeEffect = setTimeout(() => {
      if (j < greetings[i].length) {
        setCurrentText(greetings[i].slice(0, j + 1));
        setJ(j + 1);
      } else {
        setTimeout(() => {
          setJ(0);
          setI((i + 1) % greetings.length); // Move to the next greeting
        }, 1200); // Pause before transitioning
      }
    }, 50); // Typing speed

    return () => clearTimeout(typeEffect); // Cleanup timeout
  }, [j, i]); // Dependency array to trigger on changes

  return ( 
    <div>
      <header>
        <div className="logo">
          <HashLink smooth to='#greet'><h1>Jadyn Coleman</h1></HashLink>
          <p>Software Developer</p>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <HashLink smooth to='#about'>About</HashLink>
            </li>
            <li>
              <HashLink smooth to="#skills">Skills</HashLink>
            </li>
            <li>
              <HashLink smooth to="#portfolio">Portfolio</HashLink>
            </li>
            <li>
            <HashLink smooth to='#contact'><button>contact</button></HashLink>
            </li>
          </ul>
        </nav>
      </header>

      <div id="greet">
        <h1>{currentText}</h1>
      </div>

      <div className="about" id="about">
        <p>
          I am an information technology major at the University of Central Florida with a fervent{" "}
          <strong>
            <span style={{ color: "rgb(188, 109, 109)" }}>passion</span>
          </strong>{" "}
          for all things tech and a knack for transforming ideas into reality
          through code. My journey into the world of computers began with a
          simple{" "}
          <strong>
            <span style={{ color: "rgb(188, 109, 109)" }}>curiosity</span>
          </strong>{" "}
          and has since evolved into an unstoppable drive to innovate and solve
          complex problems.
        </p>
        <Link to="/AboutMore"><button>More</button></Link>
          
        
      </div>

      <div className="skills" id="skills">
        <h2>Skills</h2>
        <p>
        {" "}<strong>
            <span style={{ color: "rgb(188, 109, 109)" }}>Programming Languages:</span>
        </strong>{" "}: C, Python, Java, JavaScript<br/><br/>
        {" "}<strong>
            <span style={{ color: "rgb(188, 109, 109)" }}>Web Development:</span>
        </strong>{" "}: HTML, CSS, ReactJS, Django<br/><br/>
        {" "}<strong>
            <span style={{ color: "rgb(188, 109, 109)" }}>Cloud & IT Expertise:</span>
        </strong>{" "}: AWS, Git, Computer Assembly and Repair<br/><br/>
        {" "}<strong>
            <span style={{ color: "rgb(188, 109, 109)" }}>Certifications:</span>
        </strong>{" "}: AWS Academy Graduate (Cloud Foundations & Cloud Security Foundations), TestOut IT Fundamentals Pro Certificate
        </p>
      </div>

      <div className="portfolio" id="portfolio">
        <div className="portfolio_text">
        <h2>Portfolio</h2>
        <p>
        Here are some of the projects I have worked on,
        ranging from passion projects and hired work to
        university assignments. These projects showcase my 
        skills in web development, software engineering, and 
        problem-solving.
        </p>
        </div>

  <div className="containerbox">
  <div className="frame_container">
 
  <iframe className="iframe"
  title="pomo"
    src="https://pomodoro-iota-gold.vercel.app/#/pomodoro"
  >
  </iframe>
  <p>The Pomodoro App, built with ReactJS, features three core functions:
   a customizable Pomodoro timer, a stopwatch, and a reset option. Designed 
   for productivity, it helps you manage tasks effectively by combining time
    tracking and focused work intervals.</p>
   < a href="https://pomodoro-iota-gold.vercel.app/#/pomodoro"><button>View full website</button></a>
  </div>

 <div className="frame_container">
  <iframe className="iframe"
  title="mathgame"
    src="https://ai-study-tool-theta.vercel.app/#/Flashcard"
  >
  </iframe>
  <p>AI-powered study tool that lets users upload PDFs, Docx, or text files to automatically generate quizzes, flashcards, and study sheets.
</p>
   < a href="https://ai-study-tool-theta.vercel.app/#/Flashcard"><button>Run Code</button></a>
  </div>
  <div className="frame_container">
  <iframe className="iframe"
  title="kenyattspeakz"
    src="https://kenyattaspeaks.vercel.app/"
  >
  </iframe>
  <p>Kenyatta Speaks is a freelance website I built for a client using ReactJS,
    showcasing engaging content, photo gallery and contact form. </p>
   < a href="https://kenyattaspeaks.vercel.app/"><button>View full website</button></a>
  </div>
  <div className="frame_container">
  <iframe className="iframe"
  title="employeemanager"
    src="https://gist.github.com/Jadynco/7ecf6c7334ebb9766a6d97fa2b9d3322.pibb"
  >
  </iframe>
  <p> This Java project manages employee 
    records using a linked list. It allows adding, 
    searching, deleting employees, printing all records, 
    and finding the highest net salary. Each employee's
     details, including ID, name, and net salary, are
      displayed clearly.</p>
   < a href="https://onlinegdb.com/8ZWLWRg7k"><button>Run Code</button></a>
  </div>
</div>
</div>
<div className='container'  id='contact'> 
    <h1>Contact Me</h1>
    <form onSubmit={handleform}>
        <label>Full Name</label>
        <input
         type="text" 
         id="name"
        name="name" 
        required/>

        <label>Email Address</label>
        <input 
        type="email" 
        id="email"
        name="email"
        required/>

        <label>Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        

        <button className='submit' type="submit">Send Message</button>
    </form>
    </div>

</div>
  );
}


