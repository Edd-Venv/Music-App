import React from "react";
import Axios from "axios";
import AudioPlayer from "react-h5-audio-player";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      albums: [],
      tracks: [],
      artists: [],
      display: "hide",
      buttonDisplay: "DisplayButtonShow"
    };
  }

  async componentDidMount() {
    const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0`;
    await Axios.get(url).then(response => {
      this.setState({
        isLoaded: true,
        albums: response.data.albums.data.slice(0, 5)
      });
    });
    const urltrack = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0`;
    await Axios.get(urltrack).then(response => {
      this.setState({
        isLoaded: true,
        tracks: response.data.tracks.data.slice(0, 4),
        display: "hide",
        buttonDisplay: "DisplayButtonShow"
      });
    });
    const urlArtist = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0`;
    await Axios.get(urlArtist).then(response => {
      this.setState({
        isLoaded: true,
        artists: response.data.artists.data.slice(0, 5)
      });
    });
  }
  handleClick = event => {
    this.setState({
      display: "show",
      buttonDisplay: "DisplayButtonHide"
    });
  };

  render() {
    const { albums, tracks, artists, display, buttonDisplay } = this.state;
    return (
      <React.Fragment>
        <div style={{ width: "90%", height: "auto" }}>
          <div className="row">
            <span style={{ marginLeft: "8%", width: "5%", height: "auto" }}>
              {albums.map(album => {
                return (
                  <div
                    className="card mb-3"
                    style={{ width: "400px", height: "auto" }}
                    key={album.id}
                    id="box"
                  >
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img
                          src={album.cover_xl}
                          className="img-thumbnail"
                          alt="..."
                          style={{ marginLeft: "10%" }}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body" style={{ marginLeft: "5%" }}>
                          <h5
                            className="card-title"
                            style={{ fontSize: "1.2em" }}
                          >
                            <big>
                              <strong>{album.title}</strong>
                            </big>
                          </h5>
                          <p
                            className="card-text"
                            style={{ fontSize: "1.2em" }}
                          >
                            Artist: {album.artist.name}
                          </p>
                          <p
                            className="card-text"
                            style={{ fontSize: "1.2em" }}
                          >
                            Top 5 position: {album.position}
                          </p>
                          <p
                            className="card-text"
                            style={{ fontSize: "1.2em" }}
                          >
                            <small className="text-muted">
                              Explicit Lyrics:{" "}
                              {album.explicit_lyrics === true ? "Yes" : "No"}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </span>
            <span style={{ marginLeft: "30%", width: "5%", height: "auto" }}>
              {tracks.map(track => {
                return (
                  <div
                    className="card mb-3"
                    style={{ width: "400px", height: "auto" }}
                    key={track.id}
                    id="box"
                  >
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img
                          src={track.artist.picture}
                          className="img-thumbnail"
                          alt="..."
                          style={{ marginLeft: "9%" }}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5
                            className="card-title"
                            style={{ fontSize: "1.2em" }}
                          >
                            <big>
                              <strong>{track.title}</strong>
                            </big>
                          </h5>
                          <p
                            className="card-text"
                            style={{ fontSize: "1.2em" }}
                          >
                            Artist: {track.artist.name}
                          </p>
                          <p
                            className="card-text"
                            style={{ fontSize: "1.2em" }}
                          >
                            Top 4 postion: {track.position}
                          </p>
                          <p
                            className="card-text"
                            style={{ fontSize: "1.2em" }}
                          >
                            <small className="text-muted">
                              Explicit Lyrics:{" "}
                              {track.explicit_lyrics === true ? "Yes" : "No"}
                            </small>
                          </p>
                          <React.Fragment>
                            <div class={buttonDisplay}>
                              <button
                                className="btn btn-dark"
                                type="submit"
                                style={{
                                  width: "50px",
                                  marginLeft: "74%",
                                  height: "auto"
                                }}
                                onClick={this.handleClick}
                              >
                                <i class="fab fa-google-play" />
                              </button>
                            </div>
                            <div
                              style={{
                                marginLeft: "30%",
                                width: "100%",
                                height: "auto"
                              }}
                              className={display}
                            >
                              <AudioPlayer
                                src={track.preview}
                                controls
                                className="toggle-play-wrapper"
                                className="toggle-play-button"
                                className="react-h5-audio-player"
                                className="flex"
                              />
                            </div>
                          </React.Fragment>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </span>
            <span style={{ marginLeft: "30%", width: "5%", height: "auto" }}>
              {artists.map(artist => {
                return (
                  <div
                    className="card mb-3"
                    style={{
                      width: "400px",
                      height: "auto"
                    }}
                    key={artist.id}
                    id="box"
                  >
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img
                          src={artist.picture_xl}
                          className="img-thumbnail"
                          alt="..."
                          style={{ marginLeft: "9%" }}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body" style={{ marginLeft: "3%" }}>
                          <p
                            className="card-title"
                            style={{ fontSize: "1.2em" }}
                          >
                            <big>
                              <strong>{artist.name}</strong>
                            </big>
                          </p>
                          <p
                            className="card-text"
                            style={{ fontSize: "1.2em" }}
                          >
                            Top 5 postion: {artist.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Chart;
