import React, { useState } from "react";
import logo from "../logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./homeComponent/Home";
import Contact from "./contactComponent/Contact";
import About from "./aboutComponent/About";
function Header() {
  let mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
  };
  let [homeActive, setHomeActive] = useState(false);
  let [contactActive, setContactActive] = useState(false);
  let [aboutActive, setAboutActive] = useState(false);
  function menuActivity(menu) {
    switch (menu) {
      case "Home":
        setHomeActive(true);

        setContactActive(false);
        setAboutActive(false);
        break;
      case "Contact":
        setContactActive(true);

        setAboutActive(false);
        setHomeActive(false);
        break;
      case "About":
        setAboutActive(true);

        setContactActive(false);
        setHomeActive(false);
        break;
      default:
        return <div>You are a User.</div>;
    }
  }
  return (
    <>
      <Router>
        <div className="header">
          <Link onClick={()=>menuActivity("Home")} to="">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <div className="header-right">
            <Link
              style={homeActive ? mystyle : null}
              onClick={()=>menuActivity("Home")}
              className="link"
              to=""
            >
              Home
            </Link>
            <Link
              style={contactActive ? mystyle : null}
              onClick={()=>menuActivity("Contact")}
              className="link"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              style={aboutActive ? mystyle : null}
              onClick={()=>menuActivity("About")}
              className="link"
              to="/about"
            >
              About
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
export default Header;
