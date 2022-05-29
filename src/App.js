import './App.css';
import { Routes, Route, NavLink } from "react-router-dom"
import Home from './pages/Home';
import Beers from "./pages/Beers"
import NewBeer from "./pages/NewBeer"
import RandomBeer from "./pages/RandomBeer"
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import SingleBeer from './pages/SingleBeer';


function App() {

  return (

    <div className="App">

      <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/beers' element={ <Beers/> } />
            <Route path='/beers/:id' element={ <SingleBeer/> } />
            <Route path='/random-beer' element={ <RandomBeer/> } />
            <Route path='/new-beer' element={ <NewBeer/> } />

            <Route path='*' element={ <NotFound/> } />
            <Route path='/error' element={ <Error/> } />

      </Routes>

    </div>

  );

}

export default App;
