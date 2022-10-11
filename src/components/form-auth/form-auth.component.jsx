import React from "react";

export class FormAuth extends React.Component {
  render() {
    return (
      <form action="#">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Sign in</button>
      </form>
    );
  }
}
