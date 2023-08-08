import React from "react";
import Image from "next/image";
import BannerBG from "../assets/Banner.svg";
import Mic from "../assets/mic.svg";
import Article from "../assets/article.svg"
import Notes from "../assets/notes.svg"
import Grammar from "../assets/grammar.svg"
import Save from "../assets/save.svg"

const Banner = () => {
  return (
    <section className="">
      <div
        className="banner w-full h-0 relative "
        style={{ paddingBottom: "35%" }}
      >
        <Image
          src={BannerBG}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="bimage"
        />
      </div>

      <div className="banner-container text-center">
        <h3>Why Simple AI?</h3>

        <Image src={Mic} alt="Mic" width={40} height={40} className="" />
        <div className="element">
          <h4>Transcribe voice Story</h4>
          <h5>with human-level accuracy</h5>
        </div>
        <Image src={Article} alt="Mic" width={40} height={40} className="" />
        <div className="element">
          <h4>Reorganize your scattered</h4>
          <h5>thoughts into coherent article outlines</h5>
        </div>
        <Image src={Notes} alt="Mic" width={40} height={40} className="" />
        <div className="element">
       <h4> List key takeaways and action</h4>
       <h5>items from your meeting notes</h5>
        </div>
        <Image src={Grammar} alt="Mic" width={40} height={40} className="" />
        <div className="element">
          <h4>Fix grammar, spelling,</h4>
          <h5>and improve your writing</h5>
        </div>
        <Image src={Save} alt="Mic" width={40} height={40} className="" />
        <div className="element">
          <h4>Save your own</h4>
          <h5>custom prompts</h5>
        </div>
      </div>
    </section>
  );
};

export default Banner;
