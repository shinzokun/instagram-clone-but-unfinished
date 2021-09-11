import React from "react";
import ProfileCon from "../../assets/profile-2.png";
import "../styles/Sidebar.css";
// import "../styles/grid.css";

function Sidebar() {
  return (
    <div className="Sidebar-app bg-white rounded border border-gray-300 my-5 mx-6">
      <div className="Main-content-container py-3 px-5">
        <div className="Own-profile flex items-center">
          <img
            src={ProfileCon}
            alt="One's Own Profile"
            className="Profile-tag w-15 mr-4 hover:opacity-80"
          />
          <div className="Text-tag">
            <h2 className="Username-tag font-semibold text-base hover:opacity-60    cursor-pointer">
              user_name_
            </h2>
            <h3 className="Sub-name-tag text-gray-500 text-base hover:opacity-60">
              Hardik Singh
            </h3>
          </div>
          <button className="button-tag ml-32 text-sm text-blue-600 hover:opacity-50">
            Switch
          </button>
        </div>
        <div className="Main-text"></div>
        <div className="Others-profile"></div>
      </div>
    </div>
  );
}

export default Sidebar;
