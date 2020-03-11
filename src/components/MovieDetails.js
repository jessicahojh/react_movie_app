import React from "react";

const MovieDetails = ({currentMovieObj}) => {

    if (currentMovieObj === {}) {
        return (
            <div>
                <h2> Click On A Movie To See Details</h2>
            </div>
        )

    } else {

        return (
            <div className="movie-card" >
                <h2>Title: {currentMovieObj.title}</h2>
                <h2>Release Date: {currentMovieObj.release_date}</h2>
                <h2>Overview: {currentMovieObj.overview}</h2>
            </div>
        )
    }

}


export default MovieDetails