import React, { Component } from "react";
import "./components/card.css";
import Ben from "./components/images/Ben.png";
import Chandler from "./components/images/Chandler.jpg";
import Gunther from "./components/images/Gunther.jpg";
import Janice from "./components/images/Janice.jpg";
import Joey from "./components/images/Joey.jpg";
import Mindy from "./components/images/Mindy.jpg";
import Julie from "./components/images/Julie.png";
import Joshua from "./components/images/Joshua.png";
import Phoebe from "./components/images/Phoebe.jpg";

import Richard from "./components/images/Richard.jpg";
import Ross from "./components/images/Ross.jpg";
import Rachel from "./components/images/Rachel.png";

const images = [
  { image: Ben, id: 1, name: "Ben" },
  { image: Chandler, id: 2, name: "Chandler" },
  { image: Gunther, id: 3, name: "Gunther" },
  { image: Janice, id: 4, name: "Janice" },
  { image: Joey, id: 5, name: "Joey" },
  { image: Mindy, id: 6, name: "Mindy" },
  { image: Julie, id: 7, name: "Julie" },
  { image: Joshua, id: 8, name: "Joshua" },
  { image: Phoebe, id: 9, name: "Phoebe" },
  { image: Richard, id: 10, name: "Richard" },
  { image: Ross, id: 11, name: "Ross" },
  { image: Rachel, id: 12, name: "Rachel" }
];

class App extends Component {
  state = {
    clicked: [],
    prevClick: [],
    score: 0,
    highScore: 0,
    images
  };

  handleClick = id => {
    const prevClick = this.state.clicked.filter(
      clickedItem => clickedItem === id
    );
    const images = this.reorder(this.state.images);

    this.setState({ prevClick, images });
    if (prevClick.length === 0) {
      const clicked = this.state.clicked.concat(id);

      this.setState({ clicked: clicked });
    } else {
      this.setState({ clicked: [], prevClick: [] });
    }
  };

  componentDidMount() {
    const images = this.reorder(this.state.images);
    this.setState({ images });
  }

  reorder = stateImagesArray => {
    var currentIndex = stateImagesArray.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = stateImagesArray[currentIndex];
      stateImagesArray[currentIndex] = stateImagesArray[randomIndex];
      stateImagesArray[randomIndex] = temporaryValue;
    }
    return stateImagesArray;
  };

  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="test">
                Memory game! Score: {this.state.clicked.length}
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.images.map(image => (
              <div
                onClick={() => this.handleClick(image.id)}
                key={image.id}
                id={image.id}
                className="col col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"
              >
                <img src={image.image} alt={image.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
