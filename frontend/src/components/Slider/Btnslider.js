import React from "react";
import LeftArrow from "./icons/left-arrow.svg";
import RightArrow from "./icons/right-arrow.svg";

export default function Btnslider({ moveSlide, direction }) {
  console.log();
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? RightArrow : LeftArrow} alt="" />
    </button>
  );
}
