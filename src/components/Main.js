import React, {Component} from "react"
import MovieCard from "./MovieCards"

class Main extends Component {
    constructor() {
        super()
        this.state = {
            searchBar: "",
            results: "",
            allPopularMovies: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc6de8bc9311eee4a0310ff7b7cdf2f0&language=en-US&page=1")
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    allPopularMovies: data
                })
            })
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    
    handleSubmit(event) {
        event.preventDefault()
        this.setState({ results: "Jessica" })
    }

    render() {

        const allMovies = this.state.allPopularMovies == null ? "loading..." : this.state.allPopularMovies.results;

        if (allMovies === "loading..."){
            return (
            <div>
                <div className="all-popular-movies">
                    <h2> loading...</h2>
                </div>
            </div>
        )

        }else{
            const movieTitles = allMovies.map((allMovie) => allMovie.title);
            console.log(movieTitles)

            let data = [];
            for (let i = 0; i < movieTitles.length; i++) {
            data.push(<h2>{movieTitles[i]}</h2>)
            }

        return (
            <div>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="results"
                        placeholder="Search Here"
                        value={this.state.results}
                        onChange={this.handleChange}
                    /> 
                    <button>Search!</button>
                </form>
                
                <div className="search-results">
                    <h2 className="results">{this.state.results}</h2>
                    {/*<h2>{this.state.results}</h2>*/}
                </div>

                <div className="all-popular-movies">
                    <h2>List of all popular movies go here</h2>
                    <div>{data}</div>


                </div>

            </div>
        )}
    }
}


export default Main

