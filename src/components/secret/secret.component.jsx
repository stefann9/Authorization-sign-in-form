import React from "react";

export class Secret extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        src:''
    };
  }

   componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({src:responseJson.message})
      });
  }
  onClick = () => {
    this.props.onClick(false);
  };
  render() {
    return (
      <div className="secretInfo">
        <h1>Some important stuff</h1>
        <img src={this.state.src} alt='Random dog from dog api' />
        <button onClick={this.onClick}>Log out</button>
      </div>
    );
  }
}
