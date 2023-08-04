import React from "react";
import Image from "next/image";
import mailpic from "@/assets/mailpic.svg"
import mailbg from "@/assets/mailbg.svg"
const Simplemail = () => {
  return (
    <section className="relative">
      <div
        className="mail w-full h-0 relative "
        style={{ paddingBottom: "30%" }}
      >
        <Image
          src={mailbg}
          alt="Mail Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="mailtext absolute top-0 left-0 w-full h-full flex flex-col items-centerjustify-center">
        <h2 className="text-white text-center">
          Also try our <span>Simplemail</span> extension for Gmail
        </h2>
        <h4 className="mailpara text-center">
          Quick react, AI reply, AI compose mail and many more features.
        </h4>
        <div className="mbutton">
          {" "}
          <button className="mailbutton">Try For Free</button>
        </div>
        <div className="mailimage">
          <Image
            src={mailpic}
            alt="Mail Image"
            height={342}
            width={991}
          />
        </div>
      </div>
    </section>
  );
};

export default Simplemail;
