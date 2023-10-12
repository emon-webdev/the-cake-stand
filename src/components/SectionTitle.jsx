import React from "react";

const SectionTitle = ({ heading, colorHeading, subHeading }) => {
  return (
    <div className="text-center">
      <h2 className="text-[#151515] mb-3 text-[40px] font-bold uppercase ">
        {heading}
        <span className="text-[#ffc222]">
          {colorHeading}
        </span>
      </h2>
      <p className="text-[#ffc222]">{subHeading} </p>
    </div>
  );
};

export default SectionTitle;
