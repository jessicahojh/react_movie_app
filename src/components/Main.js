import React, { Component } from "react"
import MovieCard from "./MovieCards";


class Main extends Component {
    constructor() {
        super()
        this.state = {
            searchBar: "",
            results: "",
            allPopularMovies: null
        }

        this.handleChange = this.handleChange.bind(this)
        //   this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        debugger;
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc6de8bc9311eee4a0310ff7b7cdf2f0&language=en-US&page=1")
        // fetch("https://reqres.in/api/users?page=1")
            .then(response => response.json())
            .then(data => {
                debugger
                this.setState({
                    allPopularMovies: data
                })
            })
    }

    searchData(pageNumber) {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc6de8bc9311eee4a0310ff7b7cdf2f0&language=en-US&page=" + this.state.results)
        // fetch("https://reqres.in/api/users?page=" + this.state.results)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    allPopularMovies: data
                })
            })
    }

    // getDetail(data) {
    //     debugger;
    //     // fetch("https://api.themoviedb.org/3/movie/{movie_id}?api_key=bc6de8bc9311eee4a0310ff7b7cdf2f0&language=en-US")
    //     fetch("https://reqres.in/api/users/" + data)
    //         .then(response => response.json())
    //         .then(data => {
    //             debugger
    //             this.setState({
    //                 detail: <div>{data.data.avatar}</div>
    //             })
    //         })
    // }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    // handleSubmit(event) {
    //     event.preventDefault()
    //     this.setState({ results: "Jessica" })
    // }

    navigationDetail(data) {
        debugger;
        // fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=bc6de8bc9311eee4a0310ff7b7cdf2f0&language=en-US")
        // // fetch("https://reqres.in/api/users/" + id)
        //     .then(response => response.json())
        //     .then(data => {
        //         debugger
        //         this.props.history.push("/detail/" + id, { response: data.data });
        //         // this.setState({
        //         //     detail: <div>{data.data.avatar}</div>
        //         // })
        //     })
        this.props.history.push("/detail/" + data.id, { response: data });

    }

    render() {
        const allMovies = this.state.allPopularMovies == null ? "loading..." : this.state.allPopularMovies.results;
        console.log("detail" + this.state.detail);
        if (allMovies === "loading...") {
            return (
                <div>
                    <div className="all-popular-movies">
                        <h2> loading...</h2>
                    </div>
                </div>
            )

        } else {

            const movieTitles = allMovies;
            console.log(movieTitles);
            let data = [];
            for (let i = 0; i < movieTitles.length; i++) {
                //data.push(<h2><span onClick={() => this.getDetail(movieTitles[i].id)}>{movieTitles[i].first_name}</span></h2>)
                /*data.push(<li><h2><span onClick={() => this.navigationDetail(movieTitles[i].id)}>{movieTitles[i].first_name}</span></h2></li>)*/
                data.push(<li><h2><span onClick={() => this.navigationDetail(movieTitles[i])}>{movieTitles[i].title}</span></h2></li>)
            }

            return (
                <div className="movie-card" >
                    {/*   <form className="search-form" onSubmit={this.handleSubmit}>*/}
                    <input
                        type="text"
                        name="results"
                        placeholder="Search Here"
                        value={this.state.results}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.searchData.bind(this)}>Search!</button>
                    {/* </form>*/}

                    <div className="all-popular-movies">
                        <h2>List of all popular movies go here</h2>
                        <ul>{data}</ul>
                        <div>
                            {this.state.detail}
                        </div>
                    </div>
                </div>
            );
        }
    }
}


export default Main


