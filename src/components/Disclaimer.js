import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-router-dom';

function Disclaimer() {
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
    <h1 className="pheader">Disclaimer</h1>
    <p className="pcontent">
    The information contained in this website is for general information purposes only. The information is provided by Perfect Software and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.<br></br><br></br>
    In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.<br></br><br></br>
    Through this website you are able to link to other websites which are not under the control of Perfect Software. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.<br></br><br></br>
    Every effort is made to keep the website up and running smoothly. However, Perfect Software takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.Every effort is made to keep the website up and running smoothly. However, Perfect Software takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
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

export default Disclaimer;