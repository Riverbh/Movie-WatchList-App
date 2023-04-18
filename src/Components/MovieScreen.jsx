import React from "react";

const MovieScreen = (props) => {

    const movieDisplay = props.movieList.map((movie, index) => {
        return <h2>{movie.original_title}</h2>
    })

    return (
        <div className="page">
            <h1>River's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen