import React from "react";
import "../myproject/myproject.css";
// import image1 from "../image/s11.png";
// import image2 from "../image/s12.png"
// import image3 from "../image/s13.png"
export default function Myproject() {
  return (
    <div className="bg-black h-screen-full mb-36   myp">
      <div className="myp">
      <h1 className="text1">My Projects</h1>
      </div>
      <div className="img12">
        {/* <img className="img121" src={image1}/> */}
      </div>
      <div>
        <h1 className="text2">IDANS – Task Tracking Web App</h1>
        <p className="p1">View Use Case</p>
      </div>
      <div className="img12">
        {/* <img className="img121" src={image2}/> */}
      </div>
      <div>
        <h1 className="text2">ACSA Redesign – ERP Web App</h1>
        <p className="p1">View Use Case</p>
      </div>
      <div className="img12">
        {/* <img className="img121" src={image3}/> */}
      </div>
      <div>
        <h1 className="text2">JomWeb’s Majalah – Online Publication Website</h1>
        <p className="p1 p2">View Use Case</p>
      </div>
      <div className="btn">
        <button className="btn2">Hire me</button>
      </div>
    </div>
  );
}
