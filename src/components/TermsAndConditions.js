import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import './Home.css';
import { Link } from "react-router-dom";


function TermsAndConditions() {
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
    <h1 className="pheader">Terms and Conditions</h1>
    <p className="pcontent">
    <p className="psubheader">Use of services</p>
    <br></br><br></br>
    By using any portion of Perfect Software service, you are agreeing to this service agreement on this document entirely. Perfect Software reserves the right to modify this terms and conditions policy at any time, effective immediately upon posting of the modification to this URL: http://www.PerfectSoftware.in/termandcondition/

    <br></br>1.1 Excessive CPU, Bandwidh or Disk Space Usage has the ability to compromise our shared hosting environment. This is the result of using the system in a manner that encumbers disk space, processors or other system resources beyond the allowances of your specific plan type and to the degree that your usage compromises the hosting accounts of our other customers.

    <br></br>1.2 Excessive resource usage – cgi scripts or other executable code that consumes an undue amount of CPU time [defined dynamically by Perfect Software at will] will be reprioritized if possible, or we will ask you to discontinue its use either permanently or the script is altered by yourself or third party to operate in a less resource-hungry manner. Failure to cease operator of the offending executable will be considered as server abuse. Perfect Software reserves the right to terminate any process which it deems to be using excessive resource usage.

    <br></br>1.3 Background processes – background process [that is, application or utilities that are started from within an interactive shell login, and set to run permanently in the background on a server] are not to be initiated without prior arrangement with use. We reserve the right to examine all code before it is run on the server. Running of background processes without prior arrangement in and confirmation in writing from Perfect Software is server abuse.

    <br></br>1.4 Pornography – Perfect Software prohibits the storage and transmission (inbound and outbound) of pornography with the exception of softcore erotic art. Written permission must be obtained before any pornographic material is stored and/or transmitted throughPerfect Software servers.

    <br></br>1.5 Copyright software, Warez, destructive applications, copyright media, proprietary computer information and hacking & cracking sites are strictly prohibited on any portion of our services and network. Customers storing & transmitting (inbound and outbound) files that violate copyright or other federal laws are grounds for instant termination of service.

    <br></br>1.6 Any incident of server abuse is grounds for immediate and unconditional account termination. Common examples of abusive practices are listed below and Perfect Software reserves the right of interpretation as to what constitutes abusive practices. In short – if you are unsure that your actions may be perceived as an abuse of service, contact Perfect Software directly to check with us before proceeding.

    <br></br>1.7 Email abuse – Unsolicited Commercial Email [‘Spam’] is implicitly forbidden. This is considered server abuse and is grounds for immediate termination.

    <br></br>1.8 Selling for free – Perfect Software prohibits any portion of its services to be resold without charge. This includes but not limited to: entire hosting accounts, email services, scripts, FTP accounts, MySQL databases, applications, licenses, web space and bandwidth (this includes image hosting and file/data hosting services, either free or subscription/fee based).

    <br></br>1.9 Proxy websites and such are prohibited.

    <br></br>1.10 Perfect Software will not tolerate misuse of space, the space allocated is for website only. It can not be used for storing files or softwares not linked to website.

    <br></br>1.11 We do not allow hosting of mp3 files and video files.

    <br></br>1.12 File hosting sites or sites designed primarly for download contents are not allowed in our webspace

    <br></br>1.13 Bandwidth allocated is only for website hosted on our server, Using bandwidth for other websites by hotlinking is not allowed.

    <br></br>1.14 Webmail can be used only for temporary storage of emails, we recommend our customer to use pop3 to download emails to their own PC. Storing email in webmail is not allowed.

    <br></br>1.15 We do not allow hosting of adult sites on our servers.
    <br></br><br></br>
    <p className="psubheader">Payment and Bills</p>
    <br></br><br></br>
    2.1 All accounts are set-up within 24 hours after successful payment on a pre-pay basis only. The Payment Invoice/Receipt will be deliver to your registered e-mail id immediately after invoice marked paid.

    <br></br>2.2 Perfect Software will suspend your account if outstanding bills have not been paid in within 5 days. Perfect Software reserves the right to suspend the account

    <br></br>2.3 Perfect Software reserves the right to impose a re-activation fee for accounts that have been suspended.

    <br></br>2.4 All payments to Perfect Software are non refundable. Unless agreed otherwise.
    <br></br><br></br>
    <p className="psubheader">Backups</p>
    <br></br>
    <br></br>3.1 We strongly encourage all of our customers to do their own backups on their home computers or CD to ensure you have ready access to your data in the event, we should have a hardware failure. Although we regularly take backups of our server and we do not expect anything like this to occur, we want you to be prepared in the event that it does. Please kindly take backups of your all files.

    <br></br>3.2 Even the best and most complete and redundant backup systems can and do fail for a variety of reasons, despite the best efforts of the Web hosting service. THEREFORE, Perfect Software DOES NOT GUARANTEE THE AVAILABILITY, COMPLETENESS, CURRENCY, OR INTEGRITY OF THESE BACKUPS OR THE DATA THEY CONTAIN. Consequently, you must not rely upon the availability, completeness, currency, or integrity of these backups.

    <br></br>3.3 Customers are responsible for maintaining their own backups on their own personal computers or other computers.

    <br></br>3.4 Perfect Software does not provide any sort of compensation for lost, inaccurate, incomplete, or outdated data in the event that Perfect Software’s backups do not function properly, regardless of the reason(s) for any such malfunction, even if the malfunction was due to the fault or negligence of Perfect Software.
    <br></br><br></br>
    <p className="psubheader">Delivery Policy</p>
    <br></br>
    <br></br>We provide service delivery within 15-20 bussiness working days after payment.
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

export default TermsAndConditions;