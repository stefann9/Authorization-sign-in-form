import React from "react";
import { ContainerCards } from "../container-cards/container-cards.component";
import { NavbarSecret } from "../navbar-secret/navbar-secret.component";
import "./secret.style.css";

export class Secret extends React.Component {
  

  render() {
    return (
      <div className="secretInfo">
        <NavbarSecret user={this.props.user} onClick={this.props.onClick} />
        <h4>Here is your daily cute dog images</h4>
        <ContainerCards srcList={this.props.srcList} />
      </div>
    );
  }
}
