import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import bkg from '../bkg.svg'
import { FaPaintBrush } from 'react-icons/fa';
import { FaMobile } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


export default function Home() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true) 
  useEffect(()=> {
      const handleScroll = () => {
          let moving = window.pageYOffset
          
          setVisible(position > moving);
          setPosition(moving)
      };
      window.addEventListener("scroll", handleScroll);
      return(() => {
          window.removeEventListener("scroll", handleScroll);
      })
  })

  const cls = visible ? "visible" : "hidden";

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
    <header className="Header cls">
      {/* <img src={require("../../src/ps.png")} className="Logo" alt="logo" /> */}
      <Link className='linksb' to='/'>Perfect Software</Link>
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
          <a href="/Jobs">JOBS</a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
      &#x2630;
      </button>
    </header>

    <h1 className="heading">A leading Software Development agency!</h1>
    <h2 className="subhead">Expertise in building solutions that will accelerate your business.</h2>
    <button onClick={() => {document.getElementById('section6').scrollIntoView({behavior: 'smooth'});}} className="talkb">LET'S TALK &#x1F86A;</button>
    {/* <div className="bkg" /> */}
    <img src={bkg} className="bkg" alt="Logo" />
    <div className="sec2">
      <p className="sec2head">
        Hi there!
      </p>
      <p className="sec2subhead">
        We are<br></br>abstract abrassion.
      </p>
      <p className="cont">Perfect Software has a motto of making your business grow. We know IT is driving the present generation. So we have a dream of making Perfect.<br></br><br></br>One of the best Custom Software Development and Website design company in Agra, Web Hosting, Web promotion Agra, Software Development Company in Indiaand one stop solution for all your IT related needs be it Desktop solutions, Software Solution or Web solutions, Website Design Services.</p>
    </div>
    <div className="sec3" id="section3">
      <p className="sec3head">What we do</p>
      <p className="sec3subhead">Software solutions</p>
      <p className="sec3cont">Perfect Software has earned name as a leading professional in Customized Software Development, website designing<br></br> delivering customized website designs. Our solutions not only productive but also have priced affordably<br></br> for all our customers ranging from start ups, small business to leading corporations. </p>
      <div className="sec3grid">
          <div className="l1"><FaDesktop /><br></br><p className="l1a">Software Development</p><br></br><p className="l1b">"We provide custom software application<br></br> development services to our customers<br></br> based on their requirements."</p></div>
          <div className="r1"><FaPaintBrush /><br></br><p className="l1a">Website Development</p><br></br><p className="l1b">"With Internet becoming the most common<br></br> and easy accessible service these days, web<br></br> business has started to take its shape."</p></div>
          <div className="l2"><FaMobile /><br></br><p className="l1a">Mobile Development</p><br></br><p className="l1b">"Developed mobile applications, capabilities<br></br> and the required skillsets to explore this<br></br> excellent mobile application platform."</p></div>
          <div className="r2"><FaGlobe /><br></br><p className="l1a">Domain & Hosting</p><br></br><p className="l1b">"Unlock your online presence with our domains <br></br>and hosting. We provide secure, reliable solutions <br></br>for your web needs."</p></div>
      </div>
    </div>
    <div className="sec4">
      <p className="sec4head">CASE STUDIES</p>
      <p className="sec4subhead">we have solution to<br></br> every business problem</p>
      <div className="sec4grid">
          <div className="g1"><img src={require("../grid1.jpg")} className="gridi" alt="grid" /><p className="gridp1">Remote Online Notarization</p><p className="gridp2">Legal Service, SaaS</p></div>
          <div className="g2"><img src={require("../grid2.jpg")} className="gridi" alt="grid" /><p className="gridp1">Remote Communication Management live call & chatbots</p><p className="gridp2">Customer Services, SaaS</p></div>
          <div className="g3"><img src={require("../grid3.jpg")} className="gridi" alt="grid" /><p className="gridp1">Activity Centre Managment</p><p className="gridp2">EdTech, SaaS</p></div>
          <div className="g4"><img src={require("../grid4.jpg")} className="gridi" alt="grid" /><p className="gridp1">Credential, Translation and Education Evaluation Services</p><p className="gridp2">Service Marketplace</p></div>
          <div className="g5"><img src={require("../grid5.jpg")} className="gridi" alt="grid" /><p className="gridp1">Immigration and Education Services</p><p className="gridp2">Service Marketplace</p></div>
          <div className="g6"><img src={require("../grid6.jpg")} className="gridi" alt="grid" /><p className="gridp1">Community Marketplace</p><p className="gridp2">SaaS</p></div>
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
        <p className="quo1">We're driven by creativity and excellence, persistently challenging boundaries to reshape what's achievable, shaping a limitless tomorrow.</p>
      </div>
      <div className="quogrid">
        <div>
          {/* <img src={require("../mang3.jpg")} className="quo" alt="quo" /> */}
          <p className="post">Founder</p>
          <p className="name">Mukesh Singh</p>
        </div>
        <p className="quo1">At Perfect Software, we're passionate innovators, founded on creativity and excellence, relentlessly pushing boundaries to redefine possibilities.</p>
      </div>
    </div>
    <FaQuoteRight className="quoter" />
    </div>
    <div className="sec5" id="section5">
      <p className="clients">EXTENDED FAMILY</p>
      <p className="clients2">and thank you, clients!</p>
      <p className="clients3">for making us who we are today</p>
      {/* <div className="company">
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
      </div> */}
    </div>
    <div className='f-header grid-f'>
      <div className='p'>
        PERFECT SOFTWARE © 2023<br></br>
        All Right Reserved<br></br><br></br>
        <a className="email" href="mailto:perfectsoftware.in@gmail.com">Email Us: perfectsoftware.in@gmail.com</a>
      </div>
      <div className='q'>
        B-6 Raman Tower,<br></br>
        Sanjay Place,<br></br>
        Agra, UP, India
      </div>
      <div class="r tooltip">Jobs
        <span class="tooltiptext">We're not hiring</span>
      </div>

      <div className='w' id="section6">
        <Link className='linksa' to='/TermsAndConditions'>Terms & Conditions🡭</Link><br /><br />
        <Link className='linksa' to='/RefundPolicy'>Cancellation & Refund Policy🡭</Link><br /><br />
        <Link className='linksa' to='/PrivacyPolicy'>Privacy Policy🡭</Link><br /><br />
        <Link className='linksa' to='/Disclaimer'>Disclaimer🡭</Link>
      </div>

    </div>
    </div>
  );
}
