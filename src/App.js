import React from "react";
import "./App.css";

import Footer from "./elements/footer/Footer";
//import Login from "./elements/login/Login";
import TermsFooter from "./elements/footer/TermsFooter";

import NavBar from "./components/NavBar/NavBar";
//import Contact from "./components/Contact/Contact";
import SebaButton from "./products/Seba/SebaButton";

import './products/Seba/SebaButton.css';

function App() {
  return (
      <div className="App">
        <header className="header">
          <div className="title-header">
            <div className="title-name">
              <a href="/">
                <h1><b><i>skin</i></b>Easy</h1>
                <p>by cutis.ai</p>
              </a>
            </div>

            <div>
              <NavBar />
            </div>

            {/*<div>
              <Contact />
            </div>

            <div>
              <Login />
            </div>*/}

          </div>
        </header>

        <div id="page-1">
          <div className="text-overlay">
            <h1>
              <b>AI delivering superior skincare advice beyond expert and dermatologists.</b>
            </h1>
            <br />
            <p>
              Save time and effort with Seba, a personalized assistant that understands your skin requirements,
              provides accurate guidance on your chosen products & helps you understand issues effectively
            </p>
          </div>
          <div>
            <SebaButton />
          </div>
        </div>
        
        <div id="page-2">
          <div id="left-text">
            <h1>Improve your skin</h1>
          </div>

          <div id="right-text">
            <p>
              Feel more confident & supported about your skincare choices<br />
              knowing that you can always turn to Seba for accurate & relevant guidance
            </p>

            <table>
              <tr>
                <th>Superior Accuracy through Specialized training</th>
                <th>Up-to-date Resources & Solutions</th>
              </tr>

              <tr>
                <td>Stands out from other skincare helpers by deeply analyzing each ingredient.</td>
                <td>Seba enables you to get deep analysis of every product & ingredient, verified by derms.</td>
              </tr>
            </table>
          </div>
        </div>

        <div>
          <TermsFooter />
        </div>

        <div>
          <Footer />
        </div>
        
      </div>
  );
}

export default App;
