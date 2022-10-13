import React, { useState } from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import PregressiveImageOld from "./ProgressiveImage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = ({ name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const URLS = [
    {
      original:
        "https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6ImNwcXRtaG9ncjZkNzEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.3IraZn_4gbP9VM0f_DFIKBx-BxdYrERM3jOaYoy9TtI/image;p=main",
      thumbnail:
        "https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6ImNwcXRtaG9ncjZkNzEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.3IraZn_4gbP9VM0f_DFIKBx-BxdYrERM3jOaYoy9TtI/image;p=thumb_retina",
    },
    {
      original:
        "https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6ImQ2ZnU2Zm50ZzBkdTMtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.3wfeX7JrDXnD7V9IXvrYw-xoo0a_Eqv--piEgigddJQ/image;p=main",
      thumbnail:
        "https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6ImQ2ZnU2Zm50ZzBkdTMtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.3wfeX7JrDXnD7V9IXvrYw-xoo0a_Eqv--piEgigddJQ/image;p=thumb_retina",
    },
    {
      original:
        "https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Inhuc2JuOXp2eGM1ODItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.3mee9fWOB5xM_sBNUCf-Ymbhr7JH0iLIwnNENo0YdB4/image;p=main",
      thumbnail:
        "https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Inhuc2JuOXp2eGM1ODItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.3mee9fWOB5xM_sBNUCf-Ymbhr7JH0iLIwnNENo0YdB4/image;p=thumb_retina",
    },
  ];

  const onClick = () => {
    let index = 0;
    console.log("=====> ", { index, currentIndex, last: URLS.length });
    if (currentIndex < URLS.length - 1) {
      index = currentIndex + 1;
    }
    setCurrentIndex(index);
  };

  const getStyles = (loading) => {
    if (loading) return { filter: "blur(5px)", clipPath: "inset(0)" };
    return null;
  };

  return (
    <div>
      <h1>
        Hello <span className="name">{name}</span>!
      </h1>

      <ProgressiveImage
        src={URLS[currentIndex].original}
        placeholder={URLS[currentIndex].thumbnail}
        height={431}
        width={800}
      >
        {(src, loading) => (
          <img
            src={src}
            alt="an image"
            height={431}
            width={800}
            style={{
              transition: "filter 0.1s ease-out",
            }}
          />
        )}
      </ProgressiveImage>
      <button onClick={onClick}>Next</button>
    </div>
  );
};

export default Home;
