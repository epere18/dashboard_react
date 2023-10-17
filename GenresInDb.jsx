import React from "react";
import CategoriaGenres from "./CategoriaGenres";

const generos = ["Acción", "Aventura", "Animación", "Ciencia Ficción", "Comedia", "Documental", "Drama", "Fantasia", "Infantiles", "Musical"];

function GenresInDb() {  

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {
              generos.map((genero, i)=>{
                return <CategoriaGenres  key={ genero + i} genero={genero}/>
              })
              
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
