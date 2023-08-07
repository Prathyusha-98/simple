import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Contact from "@/components/Contact";

const About = () => {
  return (
    <>
      <div className="about">
      <div className='lg:block sm:hidden xs:hidden'><Header/></div>

        <div className="about-text">
          <h1>Simple AI Enterprise</h1>
          <h4>Empowering AI Application Specialists</h4>
          <div className="about-content-title">
            <h3>
              What motivates our behavior <br></br>and actions?
            </h3>
          </div>
          <div className="about-content">
            <p>
              At Simple AI, we strongly believe in the power of understanding to
              drive better decision-making. We recognize that involving those
              closest to the challenges AI systems aim to solve leads to
              improved outcomes. With this in mind, we have developed a product
              that empowers individuals to see, describe, and comprehend AI
              systems using natural language.
            </p>
            <br></br>
            <br></br>
            <p>
              Our easy-to-use AI tools provide clear insights into AI systems,
              allowing users to validate and correct those insights. This not
              only generates a wealth of new data but also enhances predictive
              capabilities. We are taking the human-AI relationship to new
              heights, combining understanding and performance for optimal
              results.
            </p>
            <br></br>
            <br></br>
            <p>
              If you share our passion for unlocking the true potential of AI,
              we invite you to connect with us. This is an exciting era for AI,
              and we believe in building AI that people can trust. It goes
              beyond being responsible and ethical – it's about fostering good
              business practices and shaping the future of intelligence. Join us
              in this remarkable AI journey.
            </p>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="team-heading">
          <h1>Our Team</h1>
          <h3>Meet the team transforming our AI relationship.</h3>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default About;
