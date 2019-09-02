import React from "react";
import '../index.css';

export class MovieCard extends React.Component {

    navigationHome() {
        this.props.history.push("/home");
    }

    getDetail() {
        debugger;
        fetch("https://reqres.in/api/users/" + this.props.id)
            .then(response => response.json())
            .then(data => {
                debugger
                this.setState({
                    detail: <div>{data.data.avatar}</div>
                })
            })
    }

    render() {
        var data = this.props.location.state.response;
        return (
            <div className="movie-card" >
                <h3>{data.avatar}</h3>
                <h2>Email: {data.email}</h2>
                <h2>First Name: {data.first_name}</h2>
                <h2>Last Names: {data.last_name}</h2>
                {/*<p>Vote Count: {props.vote_count}</p>*/}
                <button onClick={this.navigationHome.bind(this)} > Go Back</button>
            </div>
        )
    }
}

export default MovieCard