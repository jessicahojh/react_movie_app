import React from "react"

const AllMovies = ({movieData}) => {

    if (movieData === null) {
        return (
            <div>
                <h2> Loading...</h2>
            </div>
        )

    } else {
        const movies = movieData.results
        return (
            <div>
                {movies.map(movie =>
                    <div>{movie.title}</div>
                )}
            </div>
        )
    }
}

export default AllMovies


