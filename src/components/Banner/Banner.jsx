import React from "react";
import banner from "../../assets/BANNER.png";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="Banner">
      <img src={banner} alt="banner" />
    </div>
  );
}
