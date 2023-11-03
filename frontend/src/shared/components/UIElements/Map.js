import React from "react";
import workinprogress from "../../util/work-in-progress.jpg";

import "./Map.css";
const Map = () => {
  return (
    // <div className={`map ${props.className}`} style={props.style}>
    <div className="map">
      <img src={workinprogress} alt="work-in-progress" />
    </div>
  );
};

export default Map;
