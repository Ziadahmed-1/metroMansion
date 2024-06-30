"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "600px",
};
const properties = {
  prevArrow: (
    <KeyboardDoubleArrowLeftIcon className="mx-2 text-3xl md:text-6xl mt-10 hover:text-gray-600 duration-500 " />
  ),
  nextArrow: (
    <KeyboardDoubleArrowRightIcon className="mx-2 text-3xl md:text-6xl mt-10 hover:text-gray-600 duration-500 " />
  ),
};

const PhotoSlide = ({ images }) => {
  return (
    <div className="slide-container mt-4  ">
      <Slide {...properties}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${image.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default PhotoSlide;
