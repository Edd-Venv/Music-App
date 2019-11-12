import React from "react";
import Axios from "axios";
import "./Top4Tracks.css";
import AudioPlayer from "react-h5-audio-player";

class Top4Tracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      tracks: [],
      display: "hide",
      buttonDisplay: "DisplayButtonShow"
    };
  }
  async componentDidMount() {
    const urltrack = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0`;
    await Axios.get(urltrack).then(response => {
      this.setState({
        isLoaded: true,
        tracks: response.data.tracks.data.slice(0, 4),
        display: "hide",
        buttonDisplay: "DisplayButtonShow"
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
    const { tracks, display, buttonDisplay } = this.state;
    return (
      <div style={{ minWidth: "10%", maxWidth: "28%" }}>
        {tracks.map(track => {
          return (
            <React.Fragment>
              <div className="card mb-3" key={track.id} id="boxChart">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <div className="image-container">
                      <img
                        src={track.artist.picture}
                        className="img-thumbnail"
                        alt="..."
                        style={{ marginLeft: "9%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div
                      className="card-body"
                      style={{ marginLeft: "3%", fontSize: "1.2rem" }}
                    >
                      <h5 className="card-title">
                        <big>
                          <strong>{track.title}</strong>
                        </big>
                      </h5>
                      <p className="card-text">Artist: {track.artist.name}</p>
                      <p className="card-text">
                        Top 4 postion: {track.position}
                      </p>
                      <p className="card-text">
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
                              marginLeft: "70%"
                            }}
                            onClick={this.handleClick}
                          >
                            <i class="fab fa-google-play" />
                          </button>
                        </div>
                        <div className={display}>
                          <AudioPlayer
                            src={track.preview}
                            controls
                            classNames="toggle-play-wrapper toggle-play-button react-h5-audio-player flex"
                          />
                        </div>
                      </React.Fragment>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}
export default Top4Tracks;
