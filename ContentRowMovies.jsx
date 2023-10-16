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


  return (
    <div className="row">

      {/* <!-- Movies in Data Base --> */}
      <SmallCard data={movieDb}/>

      {/* <!-- Total Awards --> */}
      <SmallCard data={awards}/>

      
      {/* <!-- Actors quantity --> */}
      <SmallCard data={actors}/>
    
    </div>
  );
}

export default ContentRowMovies;
