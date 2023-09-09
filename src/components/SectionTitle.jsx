import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <p className="text-[#D99904]">{subHeading}</p>
      <h2 className="text-[#151515] text-[40px] font-bold uppercase ">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
