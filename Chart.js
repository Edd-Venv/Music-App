import React from "react";
import Top5Albums from "./Top5Albums.js";
import Top4Tracks from "./Top4Tracks.js";
import Top6Artists from "./Top6Artists.js";
import "./Chart.css";

class Chart extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ChartsContainer">
          <Top5Albums />
          <Top4Tracks />
          <Top6Artists />
        </div>
      </React.Fragment>
    );
  }
}

export default Chart;
