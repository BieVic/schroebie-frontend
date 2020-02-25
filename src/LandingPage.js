import React from "react";
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./LandingPage.css"

let endpoint = "http://localhost:8080/gallery";

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
    return this.state.items.map((item) => {

      let colore = 'green';
      let txt = 'Available';
      if (item.Sold) {
        colore = 'red';
        txt = 'Sold';
      }

      return (
        <div className="ui fluid card" key={item.Id}>
          <div className="image">
            <LazyLoadImage src={`data:image/jpg;base64,${item.Binary}`} alt={item.Title}/>
          </div>
          <div className="content">
            <div className="header">{item.Title}</div>
            <div className="meta">
              <span className="date">{item.Artist} {item.Year}</span>
            </div>
            <div className="description">
              Measurements: {item.Size}
            </div>
          </div>
          <div className="extra content">
             <font color={colore}>{txt}</font>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui four doubling stackable cards">{this.renderItems()}</div>
    );
  }

}

export default LandingPage;
