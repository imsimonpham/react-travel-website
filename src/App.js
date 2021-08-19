import "./App.css";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyles";
import React, { useState } from "react";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Information from "./pages/Information";
import Contact from "./pages/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Destinations" component={Destinations} />
        <Route path="/Information" component={Information} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
