import React from "react";
import { useLocation } from "react-router-dom";

const Imgsaved = () => {
  const location = useLocation();

  return (
    <>
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.66275 10.2136L7.82377 16.7066C9.00675 17.9533 10.9932 17.9533 12.1762 16.7066L18.3372 10.2136C20.5542 7.87708 20.5543 4.08892 18.3373 1.75244C16.1203 -0.584027 12.5258 -0.584026 10.3088 1.75245C10.1409 1.92935 9.85907 1.92935 9.69121 1.75245C7.47421 -0.584026 3.87975 -0.584026 1.66275 1.75245C-0.55425 4.08892 -0.554249 7.87708 1.66275 10.2136Z"
          fill="white"
          fillOpacity="0.72"
        />
      </svg>
    </>
  );
};

export default Imgsaved;
