import React from 'react'
import Image from 'next/image'

const contact = () => {
  return (
    <section className="contact bg-gray-200 min-h-screen relative">
    <div className="w-full h-full absolute inset-0">
      <Image
        src="/images/bgcontact.svg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
      />
    </div>

    <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-white max-w-lg text-center pt-10">
          <h1 className="text-4xl font-normal">Let's Talk</h1>
          <p className=" pt-4 csubheading">
            Start simplifying your life with Simple AI today!
          </p>
        </div>
       <div className="pt-12 flex">
        <form action="#" method="post" id="myForm" className="text-white ">
          <label htmlFor="">
            <input
              type="email"
              name=""
              placeholder="Your Email"
              required
              className="inputw "
            />
            <span></span>
          </label>
          <br />
          <br />
          <label htmlFor="">
            <input
              type="text"
              name=""
              required
              className="inputw"
              placeholder="Name"
            />
            <span></span>
          </label>
          <br />
          <br />
          <label htmlFor="">
            <textarea
              rows={6}
              cols={50}
              className="inputm resize-none inputw"
              placeholder="
            Message"
              required
            />
            <br /> <br />
          </label>
          <button
            type="submit"
            value="Send
            "
            className="cbutton"
          >
            GET IN TOUCH
          </button>
        </form>
      </div>

      <div className="text-white text-center pt-8 clinks">
        <span className="text-md pr-14">About Us</span>
        <span className="text-md">Contact Us</span>
      </div>

      <div className="pt-6 text-center contacttextbox text-white">
        <p className="text-md contacttext">
          Join us on this transformative journey as we harness the power of AI
          to simplify your life and unlock your true potential.At Simple AI,
          we believe that technology should empower, uplift,and enhance every
          aspect of your existence.
        </p>
      </div>
      <div className=" flex justify-center items-center space-x-4 pt-8">
        
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/facebook.svg"
            alt="Facebook"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/twitter.svg" alt="Twitter" className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/instagram.svg"
            alt="Instagram"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/linkedin.svg"
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </a>
      </div>

      <div className="copyright text-center text-white pt-5">
        <p>© Copyright 2023 - Simple AI</p>
      </div>
    </div>
  </section>
  )
}

export default contact