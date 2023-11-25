import React from "react";
const Box = (props) => {
  return (
    <>
      <div className="box-cont ">
        <div className="image">
          <img src={props.img} alt="notfound" />
        </div>
        <div className="box-content">
          <p>{props.title}</p>
          <a href="shop now">shop now</a>
        </div>
      </div>
    </>
  );
};
export default Box;
