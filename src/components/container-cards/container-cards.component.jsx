import React from "react";
import { Card } from "../card/card.component";

export class ContainerCards extends React.Component {
  extractBreed = (url) => {
    // extract breed and file name .jpg from url
    const searchTerm = "https://images.dog.ceo/breeds/";
    const breedAndFileName = url.replace(searchTerm, "");
    const arr = breedAndFileName.split("/");
    return { breed: arr[0], fileName: arr[1] };
  };

  render() {
    return (
      <div className="container-cards">
        {this.props.srcList.map((src, id) => {
          const breed = this.extractBreed(src).breed;
          return <Card key={id} src={src} id={id} breed={breed} />;
        })}
      </div>
    );
  }
}
