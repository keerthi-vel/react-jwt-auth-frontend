import React, { Component } from "react";
import axios from "axios";
import ClubCard from "../ClubCard/ClubCard";
import "./Explore.css";
import "materialize-css/dist/css/materialize.min.css";

class Explore extends Component {
  state = {
    clubs: []
  };

  componentDidMount() {
    this.getClubs();
  }

  getClubs = () => {
    axios({
      method: "get",
      url: `${this.props.databaseUrl}/api/clubs`,
    })
      .then(response => {

        this.setState({
          clubs: response.data.clubs
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.props.databaseUrl)
    const clubEls = this.state.clubs.map(club => {
      return <ClubCard club={club}/>;
    });

    return (
      <div className="club-wrap">
        <h3>FILM CLUBS</h3>

        <div className="btn-wrapper">
          <a href="/CreateClub" className="btn create-club-button">
            Create Club
          </a>
        </div>
        <div className='row'>
          {clubEls}
        </div>
      </div>
    );
  }
}

export default Explore;
