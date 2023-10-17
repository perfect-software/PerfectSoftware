import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-router-dom';
import './Home.css';


function PrivacyPolicy() {
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
          <a href="/">JOBS</a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
      &#x2630;
      </button>
    </header>
    <h1 className="pheader">Privacy Policy</h1>
    <p className="pcontent">
    We at Perfect Software respect each client’s right to personal privacy. We collect and use information through our website only as disclosed in this Privacy Policy. We want our users to always be aware of any information we collect and how we use it.<br></br><br></br>
    We collects information during the registration process. The personally identifiable information that we collect includes your first and last name. We also collects non-personally identifiable information such as country, age, gender, etc. You may update your Registration Information at any time from the members’ area.<br></br><br></br>
    We may disclose aggregate registration statistics in connection with our marketing activities.<br></br><br></br>
    Your registration information is needed to operate the site, to provide support for your account, for statistical purposes, etc. Perfect Software will not send you any unsolicited information, including e-mail, except as mentioned below. New Customers will receive a Perfect Software Hosting welcome letter explaining the features provided by the service. Perfect Software may also send periodic member letters to announce important service changes, new features, technical issue updates and news about the Service. Perfect Software keeps your personally identifiable information private and does not share it with any unauthorized third parties.
    </p>
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
      <div className='r'>
        Jobs
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
};

export default PrivacyPolicy;