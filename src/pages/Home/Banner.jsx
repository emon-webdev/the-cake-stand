import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import slider1 from "../../assets/home/01.jpg";
import slider2 from "../../assets/home/02.jpg";
import slider3 from "../../assets/home/03.png";
import slider4 from "../../assets/home/04.jpg";
import slider5 from "../../assets/home/05.png";
import slider6 from "../../assets/home/06.png";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={slider1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={slider2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={slider3} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={slider4} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={slider5} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={slider6} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
