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
//   makeImgs = () => {
    // return this.props.srcList.map((src, id) => {
    //   const breed = this.extractBreed(src).breed;
    //   return (
    //     <div key={id} className="card">
    //       <div className="card-image">
    //         <img src={src} alt="Random dog from dog api" />
    //       </div>
    //       <div className="card-body">
    //         <h5 className="card-title">{breed.toUpperCase()}</h5>
    //         <a
    //           target="_blank"
    //           href={`https://www.google.com/search?q=${breed}`}
    //         >
    //           See {breed} on Google
    //         </a>
    //       </div>
    //     </div>
    //   );
    // });
//   };

  render() {
    return (
      <div className="container-cards">
        {this.props.srcList.map((src, id) => {
          const breed = this.extractBreed(src).breed;

          return (
            // <div key={id} className="card">
            //   <div className="card-image">
            //     <img src={src} alt="Random dog from dog api" />
            //   </div>
            //   <div className="card-body">
            //     <h5 className="card-title">{breed.toUpperCase()}</h5>
            //     <a
            //       target="_blank"
            //       href={`https://www.google.com/search?q=${breed}`}
            //     >
            //       See {breed} on Google
            //     </a>
            //   </div>
            // </div>
            <Card  key={id}src={src} id={id} breed={breed}/>
          );
        })}
      </div>
    );
  }
}
