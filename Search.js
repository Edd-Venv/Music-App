import React from "react";
import Axios from "axios";
import AudioPlayer from "react-h5-audio-player";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      search: [],
      value: "",
      display: "show",
      stopAudio: "0.5"
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
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleClick = event => {
    this.setState({ display: "hide", stopAudio: "0" });
  };

  render() {
    const { search, isLoaded, display, stopAudio } = this.state;
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
