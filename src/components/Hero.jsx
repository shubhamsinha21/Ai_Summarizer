import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="nav">
        <a href="/">
          <img
            src={logo}
            alt="sumz_logo"
            className=" w-48 mt-2 object-contain "
          />
        </a>

        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/shubhamsinha21", "_blank");
          }}
          className="bg-orange-700 p-3 rounded-3xl w-18 m-3 hover:bg-white hover:text-orange-600 font-bold sm:justify-between transition-all text-white"
        >
          Github
        </button>
      </nav>

      <h1 className=" text-3xl font-extrabold leading-[1.15] text-orange-700 md:text-4xl lg:text-5xl text-center">
        Summarize Articles with <br className="max-md:hidden " />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading, an open source article summarizer that converts
        lengthy articles into small concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
