import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <section className="">
      <div className="w-full h-0 relative " style={{ paddingBottom: "40%" }}>
        <Image
          src="/images/banner.svg"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default Banner;
