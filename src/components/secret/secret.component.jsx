import React from "react";
import './secret.style.css'

export class Secret extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "",
    };
  }
  makeImgs = () => {
    return this.props.srcList.map((src, id) => (
      <div className="card-image"><img key={id} src={src} alt="Random dog from dog api" /></div>
    ));
  };
  onClick = () => {
    this.props.onClick(false);
  };

  render() {
    return (
      <div className="secretInfo">
        <h1>Some important stuff</h1>
        <button onClick={this.onClick}>Log out</button>
        <div className="container-images">{this.makeImgs()}</div></div>
      
    );
  }
}
