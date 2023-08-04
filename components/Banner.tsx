import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <section className="">
      <div className="banner w-full h-0 relative " style={{ paddingBottom: "35%" }}>
        <Image
          src="/images/banner.svg"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="bimage"
        />
      </div>
    </section>
  );
};

export default Banner;
