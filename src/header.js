import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-black py-4">
      <nav className="">
        <div className="flex items-center justify-between w-full">
          <div className="text-white font-bold text-xl mx-28">Niraj</div>
          <ul className="flex space-x-4 mx-12">
            <li>
              <Link to="/" className="text-white hover:text-blue-300" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="text-white hover:text-blue-300">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/myproject"
                className="text-white hover:text-blue-300"
                href="#"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link to="/table" className="text-white hover:text-blue-300">
                Table
              </Link>
            </li>
          </ul>
          <ul className="flex space-x-4 mx-36 text-left">
            <li>
              <button className="text-white hover:text-blue-300 left" href="#">
                Resume
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
