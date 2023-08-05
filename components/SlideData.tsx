"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const SlideData = () => {
  const textData = [
    {
      title: "Simplyspeak",
      description:
        "A game-changing app for precise, AI-powered multilingual communication",
    },
    {
      title: "SimpleMail",
      description:
        "A mail app for precise, AI-powered multilingual communication",
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
    <section className=" bg-gray-200 min-h-screen relative slide">
      <div className="slidebg w-full  absolute inset-0">
        <Image
          src="/images/slidebg.svg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="laptop absolute flex flex-col lg:flex-row">
        <div className="slideimage">
          <Image
            src="/images/laptop.svg"
            alt="Laptop Image"
            width={525}
            height={355}
          />
        </div>

        <div className="slidetext ">
          <div id="textContainer">
            <h4>{currentSlide.title}</h4>
            <h2>{currentSlide.description}</h2>
            <div className="slidebutton text-white ">
              <button className="slidebutton1 mr-4">Try For Free</button>
              <button className="slidebutton2">Learn More</button>
            </div>
          </div>

          <div className="flex arrows">
            <Image
              src="/images/backward.svg"
              alt="Backward Arrow"
              width={39}
              height={39}
              onClick={handleBackwardClick}
              className="mr-4"
            />
            <Image
              src="/images/forward.svg"
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
