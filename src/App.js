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
    };
  }
  handlerAuthorized = (data) => {
    this.setState({ authorized: data });
  };

  render() {
    return (
      <div className="App">
        {!this.state.authorized ? (
          <div className="form-container">
            <h1>Enter the password</h1>
            <FormAuth
              user1={this.state.user1}
              onSubmit={this.handlerAuthorized}
            />
          </div>
        ) : (
          <Secret
            authorized={this.state.authorized}
            onClick={this.handlerAuthorized}
          />
        )}
      </div>
    );
  }
}

export default App;
