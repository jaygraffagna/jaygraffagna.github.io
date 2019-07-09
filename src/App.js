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
}

const hdrStyle = {
  paddingTop: "60px",
  textAlign: "center",
  fontSize: "48px",
  fontWeight: "500"
}

const prfStyle = {
  marginTop:"15px",
  height:"300px",
  width:"300px",  
  borderRadius: "50%",
  display:"block",
  marginLeft:"auto",
  marginRight:"auto"
}

const descStyle = {
  marginTop:"20px",
  backgroundColor: "white",
  fontSize:"20px",
  borderRadius:"10px",
  textAlign:"center",
  width:"500px",
  display:"block",
  marginLeft:"auto",
  marginRight:"auto",
  padding:"10px"
}

function App() {
  return (
    <div style={bgStyle}  >
      <header style={hdrStyle}>
        Jay Graffagna
      </header>
      <img src={prf} alt="profile" style={prfStyle} />


      <p style={descStyle}>
        I am a developer from Iowa working at MidAmerican Energy.  I care about the people and the planet.  I post some code here.  I can be reached via email here.
      </p>
    
    </div>
  );
}

export default App;
 