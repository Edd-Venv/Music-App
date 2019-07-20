import React from "react";
import Axios from "axios";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
      data2: [],
      data3: [],
      data4: []
    };
  }

  async componentDidMount() {
    const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27`;
    await Axios.get(url).then(response => {
      this.setState({
        isLoaded: true,
        data: response.data
      });
    });
    const url2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/29`;
    await Axios.get(url2).then(response => {
      this.setState({
        isLoaded: true,
        data2: response.data
      });
    });
    const url3 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/30`;
    await Axios.get(url3).then(response => {
      this.setState({
        isLoaded: true,
        data3: response.data
      });
    });
  }

  render() {
    const { data, data2, data3 } = this.state;
    return (
      <React.Fragment>
        <div>
          <span
            style={{
              width: "100px",
              height: "auto",
              position: "relative",
              animationName: "header1",
              animationDuration: "4s",
              animationIterationCount: "1",
              animationTimingFunction: "ease",
              animationFillMode: "forwards",
              animationDelay: "-0.5s"
            }}
          >
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <img
                src={data.picture_medium}
                className="img-thumbnail"
                style={{
                  width: "170px",
                  height: "auto"
                }}
                alt=""
                id="box"
              />
            </a>
          </span>
          <span
            style={{
              width: "100px",
              height: "auto",
              position: "relative",
              animationName: "header2",
              animationDuration: "4s",
              animationIterationCount: "1",
              animationTimingFunction: "ease",
              animationFillMode: "forwards",
              animationDelay: "-0.5s"
            }}
          >
            <a href={data2.link} target="_blank" rel="noopener noreferrer">
              <img
                src={data2.picture_medium}
                className="img-thumbnail"
                style={{ width: "170px", height: "auto" }}
                alt=""
                id="box"
              />
            </a>
          </span>
          <span
            style={{
              width: "100px",
              marginLeft: "700px",
              height: "auto",
              position: "relative",
              animationName: "header3",
              animationDuration: "4s",
              animationIterationCount: "1",
              animationTimingFunction: "ease",
              animationFillMode: "forwards",
              animationDelay: "-0.5s"
            }}
          >
            <a href={data3.link} target="_blank" rel="noopener noreferrer">
              <img
                src={data3.picture_medium}
                className="img-thumbnail"
                style={{ width: "170px", height: "auto" }}
                alt=""
                id="box"
              />
            </a>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
