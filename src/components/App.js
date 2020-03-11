import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import AllMovies from './AllMovies';
import Pagination from './Pagination';
// import MovieDetails from './MovieDetails';

import { Provider } from 'react-redux';
import store from '../store';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

// require('dotenv').config()

function App() {

    const initialData = null
    const initialPage = 1
    // const initialSearch = "apple"
  
    const [movieData, setMovieData] = useState(initialData);
    const [currentPage, setCurrentPage] = useState(initialPage)
    // const [nextPage, setNextPage] = useState()
    // const [prevPage, setPrevPage] = useState()
    // const [search, setSearch] = useState(initialSearch)

    useEffect(() => {fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bc6de8bc9311eee4a0310ff7b7cdf2f0&language=en-US&page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            setMovieData(data)
        });
    })

    function gotoNextPage() {
      setCurrentPage(currentPage + 1)
    }
  
    function gotoPrevPage() {
      setCurrentPage(currentPage - 1)
    }

    // data will look like this
    // data = {"page":1,"total_results":10000,"total_pages":500,"results":
    // [{"popularity":1002.275,"vote_count":584,"video":false,"poster_path":"\/uPGq1mkEXznUpapDmOSxbsybjfp.jpg","id":475303,"adult":false,"backdrop_path":"\/6fkqwqLEcDZOEAnBBfKAniwNxtx.jpg","original_language":"en","original_title":"A Rainy Day in New York","genre_ids":[35,10749],"title":"A Rainy Day in New York","vote_average":6.7,"overview":"Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures.","release_date":"2019-07-26"},
    // {"popularity":287.873,"vote_count":1818,"video":false,"poster_path":"\/bB42KDdfWkOvmzmYkmK58ZlCa9P.jpg","id":512200,"adult":false,"backdrop_path":"\/hreiLoPysWG79TsyQgMzFKaOTF5.jpg","original_language":"en","original_title":"Jumanji: The Next Level","genre_ids":[28,12,35,14],"title":"Jumanji: The Next Level","vote_average":6.7,"overview":"As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.","release_date":"2019-12-04"}, ...]

    // useEffect(() => {fetch(`https://api.themoviedb.org/3/search/movie?api_key=bc6de8bc9311eee4a0310ff7b7cdf2f0&language=en-US&query=${search}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setMovieData(data)
    //         })
    //     })

  //   const onSubmit = e => {
  //     e.preventDefault();
  //     githubContext.searchUsers(text);
  //     setSearch('');
  //     }
  // };
    
  
    return (
      <>
      <Provider store={store}>
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
                <SearchBar
                // setSearch={setSearch}
                />
            </Row>

            <br></br>
  
            <Row>
              <Col>
              <h1>All Movies</h1>
                <AllMovies
                    movieData={movieData}
                />

                <Pagination 
                  gotoNextPage={gotoNextPage}
                  gotoPrevPage={gotoPrevPage}
                />
              </Col>
              <Col>
                {/* <h1>Movie Details:</h1> */}
                {/* <MovieDetails
                    movieData={movieData}
                /> */}
              </Col>
            </Row>
        </Container>
      </Provider>
      </>
    );

}

export default App