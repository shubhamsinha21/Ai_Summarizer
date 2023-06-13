import React, { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "/assets";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  // from this function, we are fetching an API
  const handleSubmit = async (e) => {
    alert("submitted");
  };

  const handleChange = (e) => {
    setArticle({ ...article, url: e.target.value });
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="w-full flex flex-col gap-2">
        <form
          onSubmit={handleSubmit}
          className="relative flex justify-center items-center"
        >
          <img
            value={article.url}
            onChange={handleChange}
            src={linkIcon}
            alt="link-icon"
            className=" absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="url"
            placeholder="Enter a URL"
            required
            className="url_input "
          />

          <button
            type="submit"
            className="submit_btn focus:border-gray-700 peer-focus:text-gray-700 "
          >
            <p>↵</p>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
