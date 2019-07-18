import React from 'react';
import './App.css';
import bg from './background.jpg';
import prf from './profile.jpg';

const bgStyle = {
  backgroundImage: `url(${bg})`,
  height: "600px", /* You must set a specified height */
  backgroundPosition: "center", /* Center the image */
  backgroundRepeat: "no-repeat", /* Do not repeat the image */
  backgroundSize: "cover",
  fontFamily: "sans-serif",
  margin: "0px"
}

const hdrStyle = {
  color:"white",
  paddingTop: "65px",
  textAlign: "center",
  fontSize: "64px",
  fontWeight: "300"
}

const prfStyle = {
  paddingTop:"15px",
  height:"300px",
  width:"300px",  
  borderRadius: "50%",
  display:"block",
  marginLeft:"auto",
  marginRight:"auto"
}

const descStyle = {
  marginTop:"20px",
  color: "white",
  fontSize:"20px",
  borderRadius:"5px",
  textAlign:"center",
  width:"500px",
  display:"block",
  marginLeft:"auto",
  marginRight:"auto",
  padding:"10px"
}

const parntStyle = {
  backgroundColor: "black",
  padding: "0px",
  height: "100%"
}

const resumStyle = {
  marginTop:"20px",
  backgroundColor: "#494949",
  color: "white",
  fontSize:"12px",
  borderRadius:"5px",
  width:"500px",
  display:"block",
  marginLeft:"auto",
  marginRight:"auto",
  padding:"10px"
}

function App() {
  return (
    <div style={parntStyle}>
      <div style={bgStyle}  >
        <img src={prf} alt="profile" style={prfStyle} />
        <header style={hdrStyle}>
          Jay Graffagna
        </header>
        <p style={descStyle}>
          I am a developer from Iowa working at MidAmerican Energy.  
          I care about people and the planet.  
          I post some code <a href="https://github.com/jaygraffagna">here</a>.  
          I can be reached via email <a href="mailto:jaygraffagna10@gmail.com">here</a>.
        </p>
      </div>
      <p style={resumStyle}>
        /* Resume */ <br/>
      
        Education: Augustana College - B.A. Computer Science & Applied Mathematics<br/>
        GPA: 3.5<br/><br/>

        Languages: C#, Oracle SQL, Javascript, HTML, CSS, Java<br/><br/>
          
        Technologies:  Asp.Net, Xamarin, SignalR, WPF, React, Node, Android, JSON, XML<br/><br/>
          
        Tools: Visual Studio, PL/SQL Developer, VS Code, Eclipse, Microsoft TFS, Git, Splunk<br/><br/>
          
        Employement<br/><br/>
          
        Software Developer II - MidAmerican Energy Davenport, IA<br/>
        * Lead projects from design, development, & deployment to meet business requirements<br/>
        * Defined standards within an internal team used across the entire development department<br/>
        * Guided team members & contractors throughout the development process<br/>
        * Researched new technologies to provide management recommendations for future projects<br/><br/>
          
        Software Developer I - MidAmerican Energy Davenport, IA<br/>
        * Contributed to development projects defined by the business<br/>
        * Provided support within 24/7 on-call rotation<br/>
        * Debugged existing applications to resolve user issues<br/>
        * Provided assistants to gather project requirements<br/><br/>
          
        Software Developer Intern - MidAmerican Energy Davenport, IA<br/>
        * Learned the software development lifecycle with an enteprise<br/>
        * Communicated accross business team to understand development requirements<br/>
        * Assisted in building modules within software development projects<br/>
        * Branched code bases to divide developemnt work<br/><br/>
          
        Skills<br/>
        * Strong Communicator<br/>
        * Project Leadership<br/>
        * Task Planning<br/>
        * Detail Oriented<br/>
        * High Adaptive<br/>
        * Positive Minded<br/><br/>
          
        Attributes<br/>
        * Bettendorf Natural Resouces Commitee Member<br/>
        * Living Lands & Waters Volunteer<br/>
        * Augustana Varsity Track Captain<br/>
      </p>
    </div>
  );
}

export default App;
 