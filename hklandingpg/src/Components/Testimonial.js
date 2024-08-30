import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import profile2 from "../Assets/profile2.png";
import profile3 from "../Assets/profile3.webp";
import profile4 from "../Assets/profile4.png";
import { AiFillStar } from "react-icons/ai";
import { Carousel } from 'antd';


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="tag">Testimonials</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text test-subtext">
        Explore Real-Life Success Stories: How Our Solutions Have Made a Difference for Our Clients
        </p>
      </div>

      
      {/* start */}

        <div className="carousel-container">
        <Carousel autoplay autoplaySpeed={6000} draggable>
        {/* //first slide */}
        <div className="testimonial-container">
          <div className="testimonial-section-bottom">
          <img className="testimonial-img" src={ProfilePic} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Kevin D.</h2>
          </div>
        </div>

        {/* //second slide */}
        <div className="testimonial-container">
          <div className="testimonial-section-bottom">
          <img className="testimonial-img" src={profile2} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Paul J.K.</h2>
          </div>
        </div>

        {/* //third slide */}
        <div className="testimonial-container">
        <div className="testimonial-section-bottom">
          <img className="testimonial-img" src={profile3} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Amanda C.</h2>
          </div>
        </div>

        {/* //fourth slide */}
        <div className="testimonial-container">
        <div className="testimonial-section-bottom">
          <img className="testimonial-img" src={profile4} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Lily L.</h2>
          </div>
        </div>
      </Carousel>
        </div>

    </div>
  );
};

export default Testimonial;
