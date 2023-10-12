import React from "react";
import { Parallax } from "react-parallax";
const Cover = ({ coverImg, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={coverImg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero h-[280px] md:h-[380px]"
      // style={{
      //   backgroundImage: `url("${menuImgBg}")`,
      // }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            {/* <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
