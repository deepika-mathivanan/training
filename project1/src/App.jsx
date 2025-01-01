import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/functioncomponent/navbar";
import Classcomp from "./components/classcomponent/Classcomp";
import About from "./components/functioncomponent/About";
import Gallery from "./components/functioncomponent/Gallery";
import Contact from "./components/functioncomponent/Contact";
import Home from "./components/functioncomponent/Home";
import UseEffect from "./components/functioncomponent/UseEffect";
import UseRef from "./components/functioncomponent/UseRef";
import UseContext from "./components/functioncomponent/UseContext";
import UseMemo from "./components/functioncomponent/UseMemo";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="/usecontext" element={<UseContext />} />
          <Route path="/usememo" element={<UseMemo />}/>

        </Routes>
      </BrowserRouter>
      <Classcomp />
    </div>
  );
}

export default App;
