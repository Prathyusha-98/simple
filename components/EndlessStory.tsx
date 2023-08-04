import React from "react";
import Image from "next/image";
const EndlessStory = () => {
  return (
    <section className="story relative h-screen flex flex-col md:flex-row">
      <div className=" h-1/2 md:h-full relative flex-1">
        <Image
          src="/images/endlessbgg.svg"
          alt="Endless Story Image"
          layout="fill"
          objectFit="cover"
          className="m-0 p-0"
        />
      </div>
      <div className=" relative flex-1 h-1/2 md:h-full">
        <Image
          src="/images/man.svg"
          alt="Reading Stories"
          layout="fill"
          objectFit="cover"
          className=" m-0 p-0"
        />
      </div>

      <div className="absolute endlesstext">
        <div className="endless">Endless Stories</div>
        <div className="endless-content">
          Inspire <span>creativity</span> in kids and foster interactive,
          educational moments for families.
        </div>
        <div className="flex ebutton">
          <button className=" ebutton1  text-white rounded-md mr-4">
            Try For Free
          </button>
          <button className="ebutton2 text-white rounded-md">Learn More</button>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="relative">
          <Image
            src="/images/story.gif"
            alt="Story GIF"
            width={240}
            height={406}
            className="gif"
          />
        </div>
      </div>
    </section>
  );
};

export default EndlessStory;
