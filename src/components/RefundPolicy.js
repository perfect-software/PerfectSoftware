import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-router-dom';
import './Home.css';


function RefundPolicy() {
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
    <h1 className="pheader">Cancellation and Refund Policy</h1>
    <p className="pcontent">
    
    <p className="psubheader">Cancellation Policy</p>
    <br></br>
    Cancellation of service renewals for on-going website promotion, website hosting or domain registration services must be made at least seven 7 business days prior to the end of the current service period. Requests received later than seven 7 business days prior to the end of the current service period will be treated as cancellation of services for the next service period.

    You need to Request Cancellation through your client area control panel / by submitting support ticket or send mail to info@perfectsoftware.in to cancel your service. After receiving the cancellation request the entire amount or any deduction will be refunded via original method of payment within 10 to 15 working days.

    <p className="psubheader">Refund Policy</p>
    <br></br>
    At Perfect Software we take great pride in delighting our customers. Please review our refund policies for different services.
    <br></br><br></br>
    For Web Hosting Accounts
    All new web hosting accounts are covered by a 30 day money back guarantee. If you become dissatisfied with our services at any point within the first 30 days of holding an active account, we will issue a 100% refund of your money unless otherwise specified at, or prior to, the time of purchase.
    <br></br><br></br>
    For Domain Names
    All domain names sales are made final at the time of purchase. You are the sole owner of any domain names registered through our services upon payment in full. Should you decide to leave our service for another provider, domain names are transferable and therefore not subject to refunds.

    Changes to registered domain names (incorrect spelling, etc..) cannot be made once the domain has been purchased with a domain registry. It is very important that you verify the spelling of your domain name and it is recommended that you have someone else read it as well to ensure it is exactly as expected.
    <br></br><br></br>
    For Domain Name Renewals
    Domain Name renewals are billed automatically on the schedule agreed to in the contract. They will renew automatically until you write in and cancel the renewal of you domain name. Keep in mind that domain names are on a minimum of an annual plan.
    <br></br><br></br>
    For Web Designing/Development
    In case any client is not completely satisfied with our services we can provide a refund within 30 days from the date of installation of the Project. The final refunds will be made after deducting the Service Tax and the Hourly charges for the work completed by us.
    <br></br><br></br>
    Due to Transaction Failure / Twice Deduction
    If you facing transaction failure issue then please check your bank account for any deduction, if you not find any deduction then you can try again to pay for that invoice otherwise you just submit support ticket with bank statement to follow that issue. In case you paid Twice for one transaction, then please open a support ticket or mail us to check the issue and the one transaction amount will be refunded via same source within 15 to 20 working days
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

export default RefundPolicy;