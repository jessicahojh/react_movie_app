import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import AllMovies from './AllMovies';
import Pagination from './Pagination';
import MovieDetails from './MovieDetails';

import { Provider } from 'react-redux';
import store from '../store';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

// require('dotenv').config()

function App() {
  
    const [allMovieData, setAllMovieData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentMovieObj, setCurrentMovieObj] = useState({});
    // const [search, setSearch] = useState()

    useEffect(() => {fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bc6de8bc9311eee4a0310ff7b7cdf2f0&language=en-US&page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            setAllMovieData(data)
        });
    })

    function gotoNextPage() {
      setCurrentPage(currentPage + 1)
    }
  
    function gotoPrevPage() {
      setCurrentPage(currentPage - 1)
    }

    function grabMovieObj(e){
      e.preventDefault();
      const movieName = e.target.innerText;

      for (let obj of allMovieData.results) {
        if (obj.title === movieName) {
          setCurrentMovieObj(obj)
        }
      }
    }

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
                    allMovieData={allMovieData}
                    grabMovieObj={grabMovieObj}
                />

                <Pagination 
                  gotoNextPage={gotoNextPage}
                  gotoPrevPage={gotoPrevPage}
                />
              </Col>
              <Col>
                <h1>Movie Details:</h1> 
                <MovieDetails
                    currentMovieObj={currentMovieObj}
                />
              </Col>
            </Row>
        </Container>
      </Provider>
      </>
    );

}

export default App