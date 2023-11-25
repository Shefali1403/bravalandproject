import React from "react";
import Boxdata from "./Boxdata";
import Box from "./Box";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        {Boxdata.map((val) => (
          <Box id={val.id} img={val.img} title={val.title} />
        ))}
      </div>
    </>
  );
};
export default Footer;
