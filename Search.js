import React from "react";
import Axios from "axios";
import AudioPlayer from "react-h5-audio-player";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      search: [],
      Details: [],
      value: "",
      display: "show",
      displayAudioPlayer: "hide",
      buttonDisplay: "show",
      stopAudio: "0.5",
      Video: [],
      Test: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${
      this.state.value
    }`;
    Axios.get(url).then(response => {
      this.setState({
        isLoaded: true,
        search: response.data.data[0],
        value: " ",
        display: "show",
        stopAudio: "0.5"
      });
    });
    const apiKey = "";
    const urlVideo = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${
      this.state.value
    }&type=music&info=1&verbose=1&k=${apiKey}`;
    Axios.get(urlVideo).then(responseVid => {
      this.setState({
        Video: responseVid.data.Similar.Info[0].yUrl,
        Test: responseVid.data.Similar.Info[0].Type
      });
    });
  };
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleClick = event => {
    this.setState({ display: "hide", stopAudio: "0" });
  };
handleButtonClick = event => {
    this.setState({
      displayAudioPlayer: "show",
      buttonDisplay: "hide"
    });
  };

  render() {
    const { search, isLoaded, display, stopAudio,Test,
      Video,
      buttonDisplay,
      displayAudioPlayer } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} style={{ marginLeft: "39%" }}>
          <span className="form-inline">
            <input
              className="form-control"
              type="text/number"
              onChange={this.handleChange}
              value={this.state.value}
              placeholder="Artist Name"
              style={{ width: "35%", fontSize: "1.2em", height: "auto" }}
            />
            <button className="btn btn-dark" type="submit">
              <i className="fas fa-search" />
            </button>
          </span>
        </form>
        {isLoaded === false ? null : (
          <div
            style={{
              width: "85%",
              marginLeft: "13%",
              marginTop: "2%",
              height: "auto"
            }}
            className={display}
          >
            <span
              onClick={this.handleClick}
              className="close"
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "3em",
                marginRight: "32%",
                marginTop: "10%"
              }}
            >
              ×
            </span>
            <div className="row">
              <span style={{ marginLeft: "30%", width: "5%", height: "auto" }}>
                {search === undefined ? (
                  <p style={{ fontSize: "1.2em", color: "whitesmoke" }}>
                    ARTIST NOT IN DATABASE
                  </p>
                ) : (
                  <div
                    className="card mb-3"
                    style={{
                      width: "400px",
                      height: "auto"
                    }}
                    key={search.id}
                    id="box"
                  >
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img
                          src={search.artist.picture_xl}
                          className="img-thumbnail"
                          alt="..."
                          style={{ marginLeft: "9%" }}
                        />
                      </div>
                      <div className="col-md-8" style={{ paddingLeft: "3px" }}>
                        <div className="card-body">
                          <h5
                            className="card-title"
                            style={{ fontSize: "1.2em" }}
                          >
                            <big>
                              <strong>{search.artist.name}</strong>
                            </big>
                          </h5>
                          <p
                            className="card-text"
                            style={{ fontSize: "1.2em" }}
                          >
                            Song: {search.title}
                          </p>
                          <p
                            className="card-text"
                            style={{ fontSize: "1.2em" }}
                          >
                            Album: {search.album.title}
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Explicit Lyrics:{" "}
                              {search.explicit_lyrics === true ? "Yes" : "No"}
                            </small>
                          </p>
                          <div
                            style={{
                              marginLeft: "30%",
                              width: "100%",
                              height: "auto"
                            }}
                          >
                            <AudioPlayer
                              src={search.preview}
                              controls
                              className="toggle-play-wrapper"
                              className="toggle-play-button"
                              className="react-h5-audio-player"
                              className="flex"
                              volume={stopAudio}
                            />
                          </div>
                          <small>
                            Remember to pause the audio before closing.
                          </small>
      {Test === "unknown" ? (
                        <p
                          style={{
                            fontSize: "1.2em",
                            color: "black",
                            marginLeft: "3%",
                            fontWeight: "bold"
                          }}
                        >
                          VIDEO NOT IN DATABASE
                        </p>
                      ) : (
                        <React.Fragment>
                          <h5
                            style={{
                              fontSize: "1.2em",
                              color: "black",
                              marginLeft: "3%",
                              fontWeight: "bold",
                              marginLeft: "15%"
                            }}
                          >
                            Hit Video
                          </h5>
                          <iframe
                            src={Video}
                            style={{
                              marginLeft: "3%",
                              marginBottom: "30%",
                              border: "2px solid whitesmoke",
                              width: "93.8%",
                              height: "50%"
                            }}
                            title="This is a unique title prop"
                          />
                        </React.Fragment>
                      )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </span>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Search;
