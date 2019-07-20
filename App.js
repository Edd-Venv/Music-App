import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Chart from "./components/Chart.js";
import Search from "./components/Search.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="flex-container">
          <div>
            <br />
            <br />
            <Search />
            <br />
            <br />
            <h2
              style={{
                fontSize: "1.7em",
                fontWeight: "bolder",
                marginLeft: "39%",
                width: "40%",
                height: "auto",
                color: "white"
              }}
            >
              CURRENT TOP THREE ARTISTS
              <hr style={{ width: "55%", marginRight: "47%" }} />
            </h2>
            <br />
            <Header />
            <br />
            <h1
              style={{
                fontSize: "1.8em",
                fontWeight: "bolder",
                marginLeft: "47%",
                width: "10%",
                height: "auto",
                color: "white"
              }}
            >
              CHARTS
              <hr style={{ width: "61%", marginRight: "55%" }} />
            </h1>
            <div style={{ width: "95%" }}>
              <span className="row">
                <h2
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "bolder",
                    marginLeft: "15%",
                    width: "10%",
                    height: "auto",
                    color: "white"
                  }}
                >
                  TOP 5 ALBUMS
                  <hr style={{ width: "100%" }} />
                </h2>
                <h2
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "bolder",
                    marginLeft: "23%",
                    width: "10%",
                    height: "auto",
                    color: "white"
                  }}
                >
                  TOP 4 TRACKS
                  <hr style={{ width: "100%" }} />
                </h2>
                <h2
                  style={{
                    fontSize: "1.5em",
                    fontWeight: "bolder",
                    marginLeft: "24%",
                    width: "10%",
                    height: "auto",
                    color: "white"
                  }}
                >
                  TOP 5 ARTISTS
                  <hr style={{ width: "100%" }} />
                </h2>
              </span>
            </div>
            <Chart />
            <br />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
