import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import NewSmallLogo from "../Assets/NewSmallLogo.png";
import HarmonyLogoNew from "../Assets/HarmonyLogoNew.png";
import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">

      <div className="contact-header">
        <p className="tag">Contact</p>
         <h1>Ready to get started?</h1>
         <h1>Join our fast growing company to achieve the best results</h1>
         <h3>Experience the ease of automation, the power of analytics, and the impact of seamless integration. Your journey begins now!</h3>
         <button className="primary-button">Start 30-day free trial!</button>
      </div>

      <div className="contact-form">
        <div className="contact-form-left">
            <h1>Need further guidance?</h1>
            <p>Fill out the form below and we'll get back to you as soon as possible</p>
            
            <div className="contact-info">
              <h2>HarmonyKloud</h2>
              <p>1234 Harmony Lane</p>
              <p>San Francisco, CA 94107</p>
              <div className="footer-icons contact-icons">
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebookF />
              </div>
            </div>

            
        </div>
        <div className="contact-form-right">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Message" />
            <button className="primary-button submit-button">Submit</button>
          </form>
        </div>   
      </div>

    </div>
  );
};

export default Contact;
