import React from "react";
import "./secret.style.css";

export class Secret extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "",
    };
  }
  makeImgs = () => {
    return this.props.srcList.map((src, id) => (
      <div className="card-image">
        <img key={id} src={src} alt="Random dog from dog api" />
      </div>
    ));
  };
  onClick = () => {
    this.props.onClick(false);
  };

  render() {
    return (
      <div className="secretInfo">
        <nav className="nav-bar">
          <h1>Hello {this.props.user}</h1>
          <button onClick={this.onClick}>Log out</button>
        </nav>
        <p>Here is your daily cute dog images</p>

        <div className="container-images">{this.makeImgs()}</div>
      </div>
    );
  }
}
