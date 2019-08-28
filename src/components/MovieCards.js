import React from "react"

function MovieCard(props) {
    return (
        <div className="movie-card">
            <h3>{props.title}</h3>
            <p>Overview: {props.overview}</p>
            <p>Release date: {props.release_date}</p>
            <p>Popularity: {props.popularity}</p>
            <p>Vote Count: {props.vote_count}</p>
        </div>
    )
}

export default MovieCard