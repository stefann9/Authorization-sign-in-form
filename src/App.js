import React from "react";
import { FormAuth } from "./components/form-auth/form-auth.component";
import { Secret } from "./components/secret/secret.component";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: { username: "username", password: "pass" },
      authorized: false,
      srcList: "",
    };
  }

  fetchImgOnMount = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/3");
    if (response.ok) {
      const responseJSON = await response.json();
      const newImgSrc = responseJSON.message;
      console.log(responseJSON);
      this.setState({ srcList: newImgSrc });
    }
  };

  async componentDidMount() {
    this.fetchImgOnMount();
  }

  handlerAuthorized = (data) => {
    this.setState({ authorized: data });
  };

  render() {
    return (
      <div className="App">
        {!this.state.authorized ? (
          
            <FormAuth
              user1={this.state.user1}
              onSubmit={this.handlerAuthorized}
            />
          
        ) : (
          <Secret
            user={this.state.user1.username}
            authorized={this.state.authorized}
            onClick={this.handlerAuthorized}
            srcList={this.state.srcList}
          />
        )}
      </div>
    );
  }
}

export default App;
