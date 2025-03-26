import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import emailjs from '@emailjs/browser';



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
          <h1>Jadyn Coleman</h1>
          <p>Software Developer</p>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">
                <button>Contact</button>
              </a>
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
        <Link to="/more"><button>More</button></Link>
          
        
      </div>

      <div className="skills" id="skills">
        <h2>Skills</h2>
        <p>
        {" "}<strong>
            <span style={{ color: "rgb(188, 109, 109)" }}>Programming Languages:</span>
        </strong>{" "}: Python, Java, JavaScript<br/><br/>
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
 
  <iframe
  title="pomo"
    src="https://jadynco.github.io/pomo/"
    style={{
       width: "600px",
      height:"500px"
    }}
  >
  </iframe>
  <p>The Pomodoro App, built with ReactJS, features three core functions:
   a customizable Pomodoro timer, a stopwatch, and a reset option. Designed 
   for productivity, it helps you manage tasks effectively by combining time
    tracking and focused work intervals.</p>
   < a href="https://jadynco.github.io/pomo"><button>View full website</button></a>
  </div>

 <div className="frame_container">
  <iframe
  title="mathgame"
    src="https://gist.github.com/Jadynco/0c0381d2b10f259c573b76364e0879a0.pibb"
    style={{
      width: "600px",
      height:"500px"
    }}
  >
  </iframe>
  <p>This Math Game, built in C, includes three interactive modes: Addition, Multiplication,
     and a timed Number Guessing Game. Each mode calculates your score based on accuracy and
     speed, offering a fun way to test your skills. Click "Run Code," press "Run," to play.
</p>
   < a href="https://onlinegdb.com/pXRt8aBsP"><button>Run Code</button></a>
  </div>
  <div className="frame_container">
  <iframe
  title="kenyattspeakz"
    src="https://jadynco.github.io/ksclone/"
    style={{
      width: "600px",
      height:"500px"
    }}
  >
  </iframe>
  <p>Kenyatta Speaks is a freelance website I built for a client using ReactJS,
    showcasing engaging content, photo gallery and contact form. </p>
   < a href="https://jadynco.github.io/ksclone/"><button>View full website</button></a>
  </div>
  <div className="frame_container">
  <iframe
  title="employeemanager"
    src="https://gist.github.com/Jadynco/7ecf6c7334ebb9766a6d97fa2b9d3322.pibb"
    style={{
      width: "600px",
      height:"500px"
    }}
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


