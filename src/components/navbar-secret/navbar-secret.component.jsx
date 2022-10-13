import React from "react";
import './navbar-secret.style.css'
export class NavbarSecret extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <h1>Hello {this.props.user}</h1>
        <button onClick={this.props.onClick}>Log out</button>
      </nav>
    );
  }
}
