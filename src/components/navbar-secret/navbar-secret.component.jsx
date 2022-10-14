import React from "react";
import './navbar-secret.style.css'
export class NavbarSecret extends React.Component {

  onClick = () => {
    const authorized = false;
    this.props.onClick(authorized);
  };

  render() {
    return (
      <nav className="nav-bar">
        <h1>Hello {this.props.user}</h1>
        <button onClick={this.onClick}>Log out</button>
      </nav>
    );
  }
}
