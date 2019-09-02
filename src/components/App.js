import React from 'react';
import Header from './Header';
import Main from './Main';
import Movie from './MovieCards'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import MovieCard from './MovieCards';



// function App() {
//     return (
//         <div>
//             <Header />
//             <Main />
//         </div>
//     )
// }

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" render={() => (
                <Redirect to="/home" />
                )} />
                <Route path="/home" component={Main}/>
                <Route path="/detail/:id" component={MovieCard}/>
            </Router>
        )

    }
}

export default App