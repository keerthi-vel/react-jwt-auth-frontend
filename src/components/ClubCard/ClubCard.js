import React, { Component } from "react";
import image from "./curry.jpg";
import "./ClubCard.css";
import "materialize-css/dist/css/materialize.min.css";

class ClubCard extends Component {
  state = {};

  render() {
    console.log(this.props.club)
    return (
      
        

  
            <div className="col m6 l2">
              <div className="card">
                <div className="card-image">
                  <img src={this.props.club.currentMovieURL} alt="" />
                </div>
                <div className="card-content">
                  <span className="card-title">{this.props.club.title}</span>
                  <p>
                    {this.props.club.currentTopic}
                  </p>
                </div>
                <div className="card-action">
                <a className="link" href="/ThreadGallery" alt="test" onClick={this.handleClick}>
                    <i className="material-icons right">arrow_forward</i>
                  </a>
                  <a className="link" href="https://google.com" alt="test">
                    <i className="material-icons right">add_circle</i>
                  </a>
                </div>
              </div>
              </div>
           
          
        
      
    );
  }
}

export default ClubCard;
