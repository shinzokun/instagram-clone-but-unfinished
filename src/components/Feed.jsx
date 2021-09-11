import React from "react";
import "../styles/Feed.css";
import ProfileCon from "../../assets/profile-2.png";
import ThreeDot from "../../assets/threedot.png";
import HeartIcon from "../../assets/heart.png";
import MessengerIcon from "../../assets/messenger.png";
import SendIcon from "../../assets/send.png";
import RibbonIcon from "../../assets/ribbon.png";
// import "../styles/grid.css";

function Feed() {
  return (
    <div className="Feed-app ml-48">
      <div className="Main-content-container">
        <div className="Post bg-white border border-gray-300 rounded">
          <div className="Above-container flex justify-between items-center px- py-3">
            <div className="Left-container flex items-center">
              <img
                src={ProfileCon}
                alt="Profile Image"
                className="Profile-tag-three w-8 mr-3"
              />
              <h2 className="Username-tag font-semibold text-base">user_one</h2>
            </div>
            <div className="Right-container">
              <img
                src={ThreeDot}
                alt="ThreeDot Icon"
                className="ThreeDot-tag"
              />
            </div>
          </div>
          <div className="Middle-container">
            <div className="Image-tag bg-pink-300"></div>
          </div>
          <div className="End-container">
            <div className="Icon-container">
              <div className="Left-con">
                <a href="#">
                  <img
                    src={HeartIcon}
                    alt="Like Icon"
                    className="Like-tag w-7"
                  />
                </a>
                <a href="#">
                  <img
                    src={MessengerIcon}
                    alt="Messenger Icon"
                    className="Messenger-tag w-7"
                  />
                </a>
                <a href="#">
                  <img
                    src={SendIcon}
                    alt="Send Icon"
                    className="Send-tag w-7"
                  />
                </a>
              </div>
              <div className="Right-con">
                <a href="#">
                  <img
                    src={RibbonIcon}
                    alt="Save Icon"
                    className="Save-tag w-7"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
