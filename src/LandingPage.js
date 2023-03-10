import React from "react";
import './LandingPage.css'
import { Link } from 'react-router-dom';

function LandingPage(){
  return(
    <div><h1>Landing page</h1>
    <div className="landing-page">
      <img className="b-img" src={require('./images/landingpage.png')}/>
      <img className="l-page-img" src={require('./images/clone.jpg')}/>
    
    <Link to="/postview">
      <button className="l-page-btn">Enter to My Page</button>
    </Link>
    </div></div>
  )
}
export default LandingPage; 