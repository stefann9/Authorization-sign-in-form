import React from "react";
export class Card extends React.Component {
  render() {
    const breed = this.props.breed;
    return (
      <div  className="card">
        <div className="card-image">
          <img src={this.props.src} alt="Random dog from dog api" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{breed.toUpperCase()}</h5>
          <a target="_blank" href={`https://www.google.com/search?q=${breed}`}>
            See {breed} on Google
          </a>
        </div>
      </div>
    );
  }
}
