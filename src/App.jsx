import React from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
// import "./styles/grid.css";

function App() {
  return (
    <div className="App bg-gray-50">
      <Navbar />
      <div className="Content-container flex">
        <Stories />
        <Sidebar />
      </div>
      <Feed />
      {/* <h1>Hello, World.</h1> */}
    </div>
  );
}

export default App;
