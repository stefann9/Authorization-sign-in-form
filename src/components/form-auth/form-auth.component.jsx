import React from "react";
import "./form-auth.style.css";

export class FormAuth extends React.Component {
  onSubmit = (e) => {
    const [usernameInput, passwordInput] = e.target.querySelectorAll("input");
    const { username: usernameProp, password: passwordProp } = this.props.user1;
    let authorized;
    if (
      passwordProp === passwordInput.value &&
      usernameProp === usernameInput.value
    ) {
      authorized = true;
    } else {
      authorized = false;
    }

    [usernameInput.value, passwordInput.value] = ["", ""];

    this.props.onSubmit(authorized);
  };
  render() {
    return (
      <div className="form-container ">
        <h1>Enter the password</h1>
        <form action="#" onSubmit={this.onSubmit}>
          <div className="inputbox">
            <input id="username" type="text"  required="required"/>
            <span>Username</span>
          </div>
          <div className="inputbox">
            <input id="password" type="password"  required="required" />
            <span>Password</span>
          </div>
          <div className="inputbox">
            <button>Sign in</button>
          </div>
        </form>
      </div>
    );
  }
}
