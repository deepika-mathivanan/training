import React from "react";
import "../../assets/css/Navbar.css"
import { Link } from "react-router-dom";
var Navbar=()=>{
var stying={
    color: "blue",
    fontSize:"30px"
    
}
var stylee={
    
}
return(
    <div>
        <ul class="nav-items">
      <li class="nav-item" id="home">Home</li>
      <li class="nav-item" id="about">About</li>
      <li class="nav-item" id="gallery">Gallery</li>
      <li class="nav-item" id="contact">Contact</li>
    </ul>
  
        <h1 style={stying}>this is Navbar</h1>
        <div class="box">This is a box.</div>
        
        
    </div>
)

}
export default Navbar;