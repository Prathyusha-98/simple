"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import SlideBG from "../assets/slidebg.svg";
import forward from "../assets/forward.svg";
import backward from "../assets/backward.svg";
import Laptop from "../assets/laptop.svg";

const SlideData = () => {
  const textData = [
    {
      title: "Simplyspeak",
      description:
        "A game-changing app for precise, AI-powered multilingual communication",
    },
    {
      title: "Simplymeet",
      description:
        "A powerhouse web application empowering users to excel in writing, learning, and presenting.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = textData.length;

  const handleForwardClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handleBackwardClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };
  const currentSlide = textData[currentIndex];

  return (
    <section className=" bg-gray-200 min-h-screen relative slide" style={{paddingBottom:"35%"}}>
      <div className="slidebg w-full  absolute inset-0">
        <Image src={SlideBG} alt="Hero Image" layout="fill" objectFit="cover" />
      </div>
    
      
      
      <div className="laptop absolute flex flex-col lg:flex-row">
      <div className="mobile-title">
    
            <h4 className="font-poppins">{currentSlide.title}</h4>
          </div>
    
        <div className="slideimage">
          <Image src={Laptop} alt="Laptop Image" width={525} height={355} />
        </div>

        <div className="slidetext ">
          <div id="textContainer">
            <h4>{currentSlide.title}</h4>

            <h2 >
              {currentSlide.description.split(' ').map((word, wordIndex) => {
            if (word.toLowerCase() === 'multilingual'){
              return(
            
              <span key={wordIndex} className="highlight">
                {word}{' '}
              </span>

            );
              }else if(word.toLowerCase() === 'empowering'){
                return(
                  <span key={wordIndex} className="highlight">
                  {word}{' '}
                  </span>
                );
              }else{
                return(
                  <span key={wordIndex}>{word} </span>
                );
              }




} )}</h2>
            
            <div className="slidebutton text-white ">
              <button className="slidebutton1 mr-4">Try For Free</button>
              <button className="slidebutton2">Learn More</button>
            </div>
          </div>

          <div className="flex arrows">
            <Image
              src={backward}
              alt="Backward Arrow"
              width={39}
              height={39}
              onClick={handleBackwardClick}
              className="mr-4"
            />
            <Image
              src={forward}
              alt="Forward Arrow"
              width={39}
              height={39}
              onClick={handleForwardClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideData;
