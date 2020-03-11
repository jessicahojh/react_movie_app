import React from "react"

const AllMovies = ({allMovieData, grabMovieObj, movie}) => {

    if (allMovieData === null) {
        return (
            <div>
                <h2> Loading...</h2>
            </div>
        )

    } else {
        const movies = allMovieData.results
        return (
            <div>
                {movies.map(movie =>
                    <div onClick={grabMovieObj}>{movie.title}</div>
                )}
            </div>
        )
    }
}

export default AllMovies


