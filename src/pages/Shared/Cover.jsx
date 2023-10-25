import React from "react";
const Cover = ({ coverImg, title }) => {
  return (
    <div
      // blur={{ min: -50, max: 50 }}
      // bgImage={coverImg}
      // bgImageAlt="the dog"
      // strength={-200}
      className=""
      style={{
        backgroundImage: `url("${coverImg}")`,
        backgroundPosition: "center",
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat"
      }}
    >
      <div
        className="hero h-[280px] md:h-[380px] "
      // style={{
      //   backgroundImage: `url("${menuImgBg}")`,
      // }}
      >
        <div className=""></div>
        <div className="">
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
    </div>
  );
};

export default Cover;
