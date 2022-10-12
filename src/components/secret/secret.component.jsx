import React from "react";

export class Secret extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "",
    };
  }
 
  async componentDidMount() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (response.ok) {
      const responseJSON = await response.json();
      this.setState({ src: responseJSON });
    }
  }
  onClick = () => {
    this.props.onClick(false);
  };
  render() {
    return (
      <div className="secretInfo">
        <h1>Some important stuff</h1>
        <div className="card-image">
          <img src={this.state.src.message} alt="Random dog from dog api" />
        </div>
        <button onClick={this.onClick}>Log out</button>
      </div>
    );
  }
}
