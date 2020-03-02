import React from 'react';
import "./App.css"

import AllMovies from './AllMovies';
import MovieCard from './MovieCards';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

    const searchBar = ""
    const initialData = ""
    const allPopularMovies = null
    const currentPage = 1
  
    const [search, setSearch] = useState(searchBar);
    const [data, setData] = useState(initialData);
    const [allMovies, setAllMovies] = useState(allPopularMovies);

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc6de8bc9311eee4a0310ff7b7cdf2f0&language=en-US&page=" + currentPage)
    .then(response => response.json())
    .then(data => {
        setData(data)
    })

    searchData(searchKeyWords) {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=bc6de8bc9311eee4a0310ff7b7cdf2f0&language=en-US&query=" + this.state.results)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    allPopularMovies: data
                })
            })
    }

    const handleSearch = e => {
      let searchInput = e.target.value;
    };
    
    const handleSubmit = e => {
      e.preventDefault();
        setSearchBar(searchInput);
  
        setData({"allocation_amount": allocation,
                 "investor_amounts": investors})
        
        setSearch("");
      } 
  
    return (
      <>
        <Container>
            <Row>
              <Col></Col>
              <Col md="auto">
                <h1>Popular Movies</h1>
              </Col>
              <Col></Col>
            </Row>
  
            <br></br>
  
            <Row>
              <Col>
              <h1>All Movies</h1>
                <AllMovies
                  handleSubmit={handleSubmit}
                  allocation={allocation}
                  handleAllocation={handleAllocation}
                />
              </Col>
  
              <Col>
                <h1>Movie Details:</h1>
                <MovieCards
                  movieName={movieName}
                />
              </Col>
              
            </Row>
  
        </Container>
      </>
    );

}

  

export default App