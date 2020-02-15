import React from "react";
import axios from "axios";
import "./LandingPage.css"

let endpoint = "http://localhost:8080/";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.getAllPaintings();
  }

  getAllPaintings = () => {
    axios.get(endpoint).then(res => {
      if (res.data) {
        this.setState({
          items: res.data
        });
      }
    });
  };

  renderItems() {
    return this.state.items.map((item) => (

      <div class="ui fluid card">
        <div class="image">
          <img src={`data:image/jpg;base64,${item.Binary}`} width="250" height="250"/>
        </div>
        <div class="content">
          <a class="header">{item.Title}</a>
          <div class="meta">
            <span class="date">{item.Artist}</span>
          </div>
          <div class="description">
            Measurements: {item.Size}
          </div>
        </div>
        <div class="extra content">
          <a>
            {item.Year}
          </a>
        </div>
      </div>

    ));
  }

  render() {
    return (
      <div class="ui four doubling stackable cards">{this.renderItems()}</div>
    );
  }

}

export default LandingPage;
