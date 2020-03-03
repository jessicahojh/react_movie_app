import React, { useState } from 'react';

import AllMovies from './AllMovies';
// import MovieCard from './MovieCards';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

    const initialData = null
    const currentPage = 1
  
    const [movieData, setMovieData] = useState(initialData);

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc6de8bc9311eee4a0310ff7b7cdf2f0&language=en-US&page=" + currentPage)
    .then(response => response.json())
    .then(data => {
        setMovieData(data)
    });

    // data will look like this
    // data = {"page":1,"total_results":10000,"total_pages":500,"results":
    // [{"popularity":1002.275,"vote_count":584,"video":false,"poster_path":"\/uPGq1mkEXznUpapDmOSxbsybjfp.jpg","id":475303,"adult":false,"backdrop_path":"\/6fkqwqLEcDZOEAnBBfKAniwNxtx.jpg","original_language":"en","original_title":"A Rainy Day in New York","genre_ids":[35,10749],"title":"A Rainy Day in New York","vote_average":6.7,"overview":"Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures.","release_date":"2019-07-26"},
    // {"popularity":287.873,"vote_count":1818,"video":false,"poster_path":"\/bB42KDdfWkOvmzmYkmK58ZlCa9P.jpg","id":512200,"adult":false,"backdrop_path":"\/hreiLoPysWG79TsyQgMzFKaOTF5.jpg","original_language":"en","original_title":"Jumanji: The Next Level","genre_ids":[28,12,35,14],"title":"Jumanji: The Next Level","vote_average":6.7,"overview":"As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.","release_date":"2019-12-04"}, ...]

  
    return (
      <>
        <Container>
            <Row>
              <Col></Col>
              <Col md="auto">
                <h1>Popular Movies</h1>
              </Col>
              <Col>
              {/* <SearchBar/> */}
              </Col>
            </Row>
  
            <br></br>
  
            <Row>
              <Col>
              <h1>All Movies</h1>
                <AllMovies
                    movieData={movieData}
                />
              </Col>
              <Col>
                {/* <h1>Movie Details:</h1>
                <MovieCard
                    data={data}
                    searchInput={searchInput}
                /> */}
              </Col>
            </Row>
        </Container>
      </>
    );

}

export default App