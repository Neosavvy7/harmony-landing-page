import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import HeroImage from "../Assets/heroimage.png";
import HeroImageWOGW from "../Assets/HeroImageWOGW.png";
import HeroImageWOW from "../Assets/HeroImageWOW.png";
import HeroImage2 from "../Assets/heroimagev2.png";
import RoundHero from "../Assets/Hero-Image2.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Divider } from 'antd';
import teacherHelp from "../Assets/teacher-help.png";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        
        {/* <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div> */}
        <div className="home-text-section">
          <h1 className="hero-heading">
            Revolutionize your practice with intuitive, comprehensive, and user-friendly solution.
          </h1>
          <p className="hero-text">
          Streamline clinical and practice management processes through innovative technology, enabling Practitioners to focus on what matters most - patient care.
          </p>
          <div className="hero-text-div">
            <button className="quatenary-button">
              START FREE TRIAL <FiArrowRight />{" "}
            </button>
            <button className="secondary-button">
              Book a Demo <FiArrowRight />{" "}
            </button>
          </div>
        </div>
        <div className="home-image-section">
          <img className="home-img" src={RoundHero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
