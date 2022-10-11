import React from "react";

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

    [usernameInput.value, passwordInput.value] = ['','']

    this.props.onSubmit(authorized);
  };
  render() {
    return (
      <form action="#" onSubmit={this.onSubmit}>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Sign in</button>
      </form>
    );
  }
}
