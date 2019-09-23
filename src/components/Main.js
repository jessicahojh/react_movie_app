import React, { Component } from "react"
import MovieCard from "./MovieCards";
import Pagination from './Pagination';


class Main extends Component {
    constructor() {
        super()
        this.state = {
            searchBar: "",
            results: "",
            allPopularMovies: null,
            currentPage: 1, 
            totalPages: 500
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        debugger;
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc6de8bc9311eee4a0310ff7b7cdf2f0&language=en-US&page=" + this.state.currentPage)
            .then(response => response.json())
            .then(data => {
                debugger
                this.setState({
                    allPopularMovies: data
                })
            })
    }

    searchData(searchKeyWords) {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=bc6de8bc9311eee4a0310ff7b7cdf2f0&language=en-US&query=" + this.state.results)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    allPopularMovies: data
                })
            })
    }


    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }


    navigationDetail(data) {
        this.props.history.push("/detail/" + data.id, { response: data });

    }

    render() {
        const allMovies = this.state.allPopularMovies == null ? "loading..." : this.state.allPopularMovies.results;
        console.log("detail" + this.state.detail);

        const totalMovies = 10000;

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
                data.push(<li><h2><span onClick={() => this.navigationDetail(movieTitles[i])}>{movieTitles[i].title}</span></h2></li>)
            }

            return (
                <div className="movie-card" >
                    <input
                        type="text"
                        name="results"
                        placeholder="Search Here"
                        value={this.state.results}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.searchData.bind(this)}>Search!</button>

                    <div className="all-popular-movies">
                        <h2>List of all popular movies go here</h2>
                        <ul>{data}</ul>
                        <div>
                            {this.state.detail}
                        </div>
                    </div>

                    <div>
                        { this.state.currentPage && (
                        <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                        Page <span className="font-weight-bold">{ this.state.currentPage }</span> / <span className="font-weight-bold">{ this.state.totalPages }</span>
                        </span>
                        ) }

                    </div>

                    <div className="d-flex flex-row py-4 align-items-center">
                        <Pagination totalRecords={totalMovies} 
                                    pageLimit={20} 
                                    pageNeighbours={1} 
                                    onPageChanged={this.onPageChanged} />
                    </div>

                </div>
            );
        }
    }
}


export default Main


