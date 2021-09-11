import React from "react";
import InstaLogo from "../../assets/ig-logo.png";
import SearchCon from "../../assets/search.svg";
import HomeCon from "../../assets/home.svg";
import MessageCon from "../../assets/message.svg";
import CompassCon from "../../assets/compass.svg";
import LikeCon from "../../assets/like.svg";
import ProfileCon from "../../assets/profile.svg";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar-app bg-white">
      <div className="Main-container flex justify-between items-center px-48 py-2 border-b border-gray-300">
        <div className="Left-container">
          <img src={InstaLogo} alt="Instagram Logo" className="Logo-tag w-9" />
        </div>
        <div className="Middle-container bg-gray-100 rounded border border-gray-300 py-1 px-4 ml-20">
          <div className="Input-container flex ">
            <img src={SearchCon} alt="Search Icon" className="Seach-tag w-4" />
            <input
              type="text"
              className="Input-tag px-3 placeholder-black bg-transparent"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="Right-container">
          <div className="Icon-tags flex">
            <a href="#">
              <img
                src={HomeCon}
                alt="Home Icon"
                className="Home-tag w-6 mx-2 hover:opacity-70"
              />
            </a>
            <a href="#">
              <img
                src={MessageCon}
                alt="Message Icon"
                className="Message-tag w-6 mx-2 hover:opacity-70"
              />
            </a>
            <a href="#">
              <img
                src={CompassCon}
                alt="Compass Icon"
                className="Compass-tag w-6 mx-2 hover:opacity-70"
              />
            </a>
            <a href="#">
              <img
                src={LikeCon}
                alt="Like Icon"
                className="Like-tag w-6 mx-2 hover:opacity-70"
              />
            </a>
            <a href="#">
              <img
                src={ProfileCon}
                alt="Profile Icon"
                className="Profile-tag-one w-6 mx-2 hover:opacity-70"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
