import React from "react";
import "../overview/overview.css";
// import image from "../image/Ellipse 1.png";
import image1 from "../image/abccc.png";
export default function overview() {
  return (
    <>
      <div className="bg-black h-full w-full">
        <div className="grid grid-cols-2">
          <div className="mt-36 ml-36">
            <h1 className="pt-10 text-white ml-0 font-sans text-5xl not-italic font-medium leading-3">Hello</h1>
            <h1 className="mt-10 text-white ml-20 font-sans text-5xl not-italic font-medium leading-3">I am Niraj</h1>
            <h1 className="text3">Software Engineer</h1>
            <p className="text4">
              What I like about software engineer  is that it captures a moment
              <br />
              that is gone forever, that cannot be reproduced. Anything
              <br />
              happens, I always carry passion for coding..{" "}
            </p>
            <div id="">
              <button id="hireme">Hire Me</button>
            </div>
          </div>
          <div>
            <div id="part2">
              <img  className="imgg" src={image1} alt='error image'></img>
            </div>
          </div>
        </div>
        <div className="secondpart">
          <h1 className="sp1">hear i uplode my image </h1>
        </div>
        {/* <div className="grid grid-cols-3 ptm">
          <div className="box1">
            <h1 className="xd">XD</h1>
            <h1 className="Adobe">Adobe</h1>
          </div>
          <div className="box2">
            <h1 className="xd">XD</h1>
            <h1 className="Adobe">Adobe</h1>
          </div>
          <div className="box1">
            <h1 className="xd">XD</h1>
            <h1 className="Adobe">Illustrator</h1>
          </div>
          <div className="box3">
            <h1 className="xd">XD</h1>
            <h1 className="Adobe">HTML</h1>
          </div>
          <div className="box4">
            <h1 className="xd">XD</h1>
            <h1 className="Adobe">CSS</h1>
          </div>
          <div className="box3">
            <h1 className="xd">XD</h1>
            <h1 className="Adobe">PHOTOSHOP</h1>
          </div>
        </div> */}
      </div>
    </>
  );
}
