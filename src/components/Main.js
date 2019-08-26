import React, {Component} from "react"

class Main extends Component {
    constructor() {
        super()
        this.state = {
            searchBar: "",
            results: "",
            allPopularMovies: null
        }

        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc6de8bc9311eee4a0310ff7b7cdf2f0&language=en-US&page=1")
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    allPopularMovies: data
                })
                // console.log(data)
                // console.log(data.results)
            })
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
    
    // handleSubmit(event) {
    //     event.preventDefault()
    //     const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    //     const randMemeImg = this.state.allMemeImgs[randNum].url
    //     this.setState({ randomImg: randMemeImg })
    // }
    
    render() {

        const allMovies = this.state.allPopularMovies == null ? "loading..." : this.state.allPopularMovies.results;
        console.log(allMovies)
        console.log(this.state.allPopularMovies)
        console.log(typeof allMovies)
        if (allMovies === "loading..."){
            return (
            <div>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="search-bar"
                        placeholder="search here"
                        value={this.state.searchBar}
                        onChange={this.handleChange}
                    /> 
                
                    <button>Search!</button>
                </form>
                
                <div className="search-results">
                    <h2>Searched results go here</h2>
                </div>

                <div className="all-popular-movies">
                    <h2>List of all popular movies go here</h2>
                    <h2> loading...</h2>
                </div>

            </div>
        )

        }else{
            
            const movieTitles = allMovies.map((allMovie) => allMovie.title);
            console.log(movieTitles);
            console.log(typeof(movieTitles))
        return (
            <div>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="search-bar"
                        placeholder="search here"
                        value={this.state.searchBar}
                        onChange={this.handleChange}
                    /> 
                
                    <button>Search!</button>
                </form>
                
                <div className="search-results">
                    <h2>Searched results go here</h2>
                </div>

                <div className="all-popular-movies">
                    <h2>List of all popular movies go here</h2>
                    <h2> {movieTitles}</h2>

                </div>

            </div>
        )}
    }
}


export default Main

