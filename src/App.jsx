import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
    //<Router component= {Error} /> --- For 404 Error Page
  );
}

export default App;