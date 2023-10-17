import React from "react";
import ChartRow from "./ChartRow";

const Chart = () => {
  let tableRowData = [
    {
      Title: "Batman",
      Length: "123",
      Rating: 10,
      Genres: ["Acción", "Ficción"],
      Awards: 5,
    },
    {
      Title: "Spiderman",
      Length: "200",
      Rating: 10,
      Genres: ["Acción", "Aventura"],
      Awards: 10,
    },
  ];

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th className="table-dark" scope="col">Titulo</th>
                  <th className="table-dark" scope="col">Duración</th>
                  <th className="table-dark" scope="col">Rating</th>
                  <th className="table-dark" scope="col">Generos</th>
                  <th className="table-dark" scope="col">Premios</th>
                </tr>
              </thead>
              <tfoot>
              <tr>
                  <th className="table-info" scope="col">Titulo</th>
                  <th className="table-info" scope="col">Duración</th>
                  <th className="table-info" scope="col">Rating</th>
                  <th className="table-info" scope="col">Generos</th>
                  <th className="table-info" scope="col">Premios</th>
                </tr>
              </tfoot>
              <tbody>
                {
                    tableRowData.map((row, i)=>{
                        return <ChartRow key = {row + i} data = {row}/>
                    })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
