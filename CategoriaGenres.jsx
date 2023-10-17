import React from "react";

function CategoriaGenres({genero}){
  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">{genero}</div>
        </div>
      </div>
    </>
  );
}

CategoriaGenres.defaultProps ={
    generos: null
}

export default CategoriaGenres;
