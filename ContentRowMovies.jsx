import React from "react";
import SmallCard from "./SmallCard";

function ContentRowMovies() {
  const movieDb = {
    titulo: "Movies in Data Base",
    color: "primary",
    cifra: 21,
    icono: "fa-film"
  }

  const awards ={
    titulo: "Total Awards",
    color: "success",
    cifra: 79,
    icono: "fa-award" 
  }

  const actors = {
    titulo: "Actors quantity",
    color: "warning",
    cifra: 49,
    icono: "fa-user"
  }


  const cardsProp = [movieDb, awards, actors]

  return (
    <div className="row">

    {
      cardsProp.map((cardProp, i) =>{
        return <SmallCard key={cardProp + i} {...cardProp}/>
      } )
    }
   
    </div>
  );
}

export default ContentRowMovies;
