import React from "react";
import Navbar from "./components/functioncomponent/Navbar";
import Classcomp from "./components/classcomponent/Classcomp";
import About from "./components/functioncomponent/about";
import Gallery from "./components/functioncomponent/gallery";
import Contact from "./components/functioncomponent/Contact";
import Home from "./components/functioncomponent/home";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return(

    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Gallery" element={<Gallery/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
     </Routes>
      </BrowserRouter>
      <Navbar />
      <Classcomp />
      <About college="kec" clg1="arts"clg2="poli" />
      <Gallery />
      <Contact />
      <Home />
    </div>
  );
}
export default App;