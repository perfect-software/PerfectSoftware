import React, { useState, useEffect } from "react";
import "./Home.css";
import { CSSTransition } from "react-transition-group";
import bkg from '../bkg.svg'
import { FaPaintBrush } from 'react-icons/fa';
import { FaDatabase } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


export default function Home() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <div>
    <header className="Header">
      {/* <img src={require("../../src/ps.png")} className="Logo" alt="logo" /> */}
      <p className="main">Perfect Software</p>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
        <a onClick={() => {document.getElementById('section3').scrollIntoView({behavior: 'smooth'});}}>SERVICES</a>
        <a onClick={() => {document.getElementById('section5').scrollIntoView({behavior: 'smooth'});}}>CLIENTS</a>
        <a onClick={() => {document.getElementById('section6').scrollIntoView({behavior: 'smooth'});}}>CONTACT</a>
          {/* <a href="/">DOMAIN BOOKING</a>
          <a href="/">HOSTING</a> */}
          <a href="/">JOBS</a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
      &#x2630;
      </button>
    </header>

    <h1 className="heading">A leading Software Development agency!</h1>
    <h2 className="subhead">Expertise in building solutions that will accelerate your business.</h2>
    <button className="talkb">LET'S TALK &#x1F86A;</button>
    {/* <div className="bkg" /> */}
    <img src={bkg} className="bkg" alt="Logo" />
    <div className="sec2">
      <p className="sec2head">
        Hi there!
      </p>
      <p className="sec2subhead">
        We are <br></br>abstract abrassion.
      </p>
      <p className="cont">Id in massa et feugiat non enim non pretium pretium fermentum donec neque pellentesque et sociis integer amet venenatis dignissim a porta maecenas non.<br></br><br></br> Placerat aliquet eu, sollicitudin interdum leo suspendisse aliquam imperdiet gravida mauris quis sit fusce in purus leo eu sapien amet, arcu, lacus in enim vulputate cras tortor posuere elementum pulvinar netus morbi nulla etiam amet dictum tortor purus malesuada sed maecenas tincidunt elementum id in placerat ut semper.</p>
    </div>
    <div className="sec3" id="section3">
      <p className="sec3head">What we do</p>
      <p className="sec3subhead">Software solutions</p>
      <p className="sec3cont">Id in massa et feugiat non enim non pretium pretium fermentum donec neque pellentesque et <br></br>
        sociis integer amet venenatis dignissim a porta maecenas non.</p>
      <div className="sec3grid">
          <div className="l1"><FaDesktop /><br></br><p className="l1a">Software Development</p><br></br><p className="l1b">Ultrices leo dictum integer quam nulla morbi <br></br>adipiscing ac suspendisse neque vel non egestas<br></br> commodo sit felis consectetur.</p></div>
          <div className="r1"><FaPaintBrush /><br></br><p className="l1a">Website Development</p><br></br><p className="l1b">Ultrices leo dictum integer quam nulla morbi <br></br>adipiscing ac suspendisse neque vel non egestas<br></br> commodo sit felis consectetur.</p></div>
          <div className="l2"><FaDatabase /><br></br><p className="l1a">Database Management</p><br></br><p className="l1b">Ultrices leo dictum integer quam nulla morbi <br></br>adipiscing ac suspendisse neque vel non egestas<br></br> commodo sit felis consectetur.</p></div>
          <div className="r2"><FaGlobe /><br></br><p className="l1a">Domain & Hosting</p><br></br><p className="l1b">Ultrices leo dictum integer quam nulla morbi <br></br>adipiscing ac suspendisse neque vel non egestas<br></br> commodo sit felis consectetur.</p></div>
      </div>
    </div>
    <div className="sec4">
      <p className="sec4head">CASE STUDIES</p>
      <p className="sec4subhead">we have solution to<br></br> every business problem</p>
      <div className="sec4grid">
          <div className="g1"><img src={require("../grid1.jpg")} className="gridi" alt="grid" /><p className="gridp1">Remote Online Notarization</p><p className="gridp2">Live Notary - Legal Service, SaaS</p></div>
          <div className="g2"><img src={require("../grid2.jpg")} className="gridi" alt="grid" /><p className="gridp1">Remote Communication Management live call & chatbots</p><p className="gridp2">RushAnswer - Customer Services, SaaS</p></div>
          <div className="g3"><img src={require("../grid3.jpg")} className="gridi" alt="grid" /><p className="gridp1">Activity Centre Managment</p><p className="gridp2">Twishr - EdTech, SaaS</p></div>
          <div className="g4"><img src={require("../grid4.jpg")} className="gridi" alt="grid" /><p className="gridp1">Credential, Translation and Education Evaluation Services</p><p className="gridp2">IEE - Service Marketplace</p></div>
          <div className="g5"><img src={require("../grid5.jpg")} className="gridi" alt="grid" /><p className="gridp1">Immigration and Education Services</p><p className="gridp2">GCS - Service Marketplace</p></div>
          <div className="g6"><img src={require("../grid6.jpg")} className="gridi" alt="grid" /><p className="gridp1">Community Marketplace</p><p className="gridp2">Taagfi - SaaS</p></div>
      </div>
    </div>
    <div>
    <FaQuoteLeft className="quotel" />
    <div className="quotes">
      <div className="quogrid">
        <div>
          {/* <img src={require("../mang1.jpg")} className="quo" alt="quo" /> */}
          <p className="post">Founder</p>
          <p className="name">Dharmendra Singh</p>
        </div>
        <p className="quo1">For the first time in onsectetur neque justo auctor sagittis cursus mauris fusce tristique integer arcu ultricies fringilla sed  integer arcu ultricies fringilla sed.</p>
      </div>
      <div className="quogrid">
        <div>
          {/* <img src={require("../mang3.jpg")} className="quo" alt="quo" /> */}
          <p className="post">Founder</p>
          <p className="name">Mukesh Singh</p>
        </div>
        <p className="quo1">For the first time in onsectetur neque justo auctor sagittis cursus e justo auctor sagittis cursus mauris fusce tristique integer arcu ultricies fringilla sed.</p>
      </div>
    </div>
    <FaQuoteRight className="quoter" />
    </div>
    <div className="sec5" id="section5">
      <p className="clients">EXTENDED FAMILY</p>
      <p className="clients2">and thank you, clients!</p>
      <p className="clients3">for making us who we are today</p>
      <div className="company">
        <img src={require("../client-logo-1.png")} alt="comp" />
        <img src={require("../client-logo-2.png")} alt="comp" />
        <img src={require("../client-logo-3.png")} alt="comp" />
        <img src={require("../client-logo-4.png")} alt="comp" />
        <img src={require("../client-logo-5.png")} alt="comp" />
        <img src={require("../client-logo-6.png")} alt="comp" />
        <img src={require("../client-logo-7.png")} alt="comp" />
        <img src={require("../client-logo-8.png")} alt="comp" />
        <img src={require("../client-logo-1.png")} alt="comp" />
        <img src={require("../client-logo-2.png")} alt="comp" />
        <img src={require("../client-logo-3.png")} alt="comp" />
        <img src={require("../client-logo-4.png")} alt="comp" />
      </div>
    </div>
    <div className='f-header grid-f'>
      <div className='p'>
        © 2023 PERFECT SOFTWARE<br></br>
        All Right Reserved
        </div>
        <div className='q'>
        B-6 Raman Tower,<br></br>
        Sanjay Place,<br></br>
        Agra, UP.<br></br>
        India
        </div>
        <div className='r'>
          Jobs
        </div>
        <div className='w' id="section6">
        <a className='linksa' href='http://www.perfectsoftware.in/TermAndCondition.html'>Terms & Conditions🡭</a><br></br><br></br>
        <a  className='linksa' href='http://www.perfectsoftware.in/RefundPolicy.html'>Cancellation & refund Policy🡭</a><br></br><br></br>
        <a  className='linksa' href='http://www.perfectsoftware.in/PrivacyPolicy.html'>Privacy Policy🡭</a><br></br><br></br>
        <a  className='linksa' href='http://www.perfectsoftware.in/Disclaimer.html'>Disclaimer🡭</a>
      </div>
    </div>
    </div>
  );
}
