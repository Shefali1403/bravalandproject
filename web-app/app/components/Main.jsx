"use client";
import React from "react";
import { useState, useEffect } from "react";
const imageList = [
  "imgbg1.png",
  "imgbg2.png",
  "imgbg3.png",
  "imgbg4.png",
  "imgbg5.png",
];
const headList = [
  "premium zip hoodies",
  "premium tees",
  "heritage women's tanks",
  "heritage tees",
  "heritage hoodies",
];
const Main = () => {
  const [currImage, setImage] = useState(imageList[0]);
  const [currHead, setHead] = useState(headList[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (imageList.indexOf(currImage) + 1) % imageList.length;
      setImage(imageList[nextIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, [currImage]);
  useEffect(() => {
    const inter = setInterval(() => {
      const nexti = (headList.indexOf(currHead) + 1) % headList.length;
      setHead(headList[nexti]);
    }, 3000);
    return () => clearInterval(inter);
  }, [currHead]);

  return (
    <>
      <div
        className="main-container"
        style={{ backgroundImage: `url('/images/${currImage}')` }}
      >
        <div className="heading">
          <h1>{currHead}</h1>
        </div>
        <button>shop now</button>
      </div>
    </>
  );
};
export default Main;
