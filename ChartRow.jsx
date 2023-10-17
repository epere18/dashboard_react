import React from 'react'

const ChartRow = ({data}) => {
  return (
    <>
        <tr>
            <td>{data.Title}</td>
            <td>{data.Length}</td>
            <td>{data.Rating}</td>
            <td>
                <ul>
                    {data.Genres.map((genre, i)=>
                        <li key={genre + i}>{genre}</li>
                    )}
                </ul>
            </td>
            <td>{data.Awards}</td>
        </tr>
    
    </>
  )
}

export default ChartRow;