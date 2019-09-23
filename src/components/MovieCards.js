import React from "react";
import '../index.css';

export class MovieCard extends React.Component {

    navigationHome() {
        this.props.history.push("/home");
    }

    render() {
        var data = this.props.location.state.response;
        return (
            <div className="movie-card" >
                <h2>Title: {data.title}</h2>
                <h2>Release Date: {data.release_date}</h2>
                <h2>Overview: {data.overview}</h2>
                <button onClick={this.navigationHome.bind(this)} > Go Back</button>
            </div>
        )
    }
}

export default MovieCard