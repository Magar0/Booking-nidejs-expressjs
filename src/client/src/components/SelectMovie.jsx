import React, { useState } from 'react'

const SelectMovie = ({ movies, changeMovie, selectedMovie }) => {

    return (
        <div className='movie-row'>
            <h3>Select A Movie</h3>
            <div>
                {
                    movies.map((item, ind) => (
                        <div className={`movie-column ${selectedMovie === item ? "movie-column-selected" : null}`} key={ind} onClick={() => changeMovie(item)} >{item}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default SelectMovie