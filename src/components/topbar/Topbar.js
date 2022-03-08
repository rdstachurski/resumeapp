import "./topbar.css";
import React from "react";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">Resume</li>
          <li className="topListItem">Project example</li>
        </ul>
      </div>
    </div>
  );
}
