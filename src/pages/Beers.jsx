import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import Navbar from "../components/Navbar"
import axios from 'axios'
import PuffLoader from 'react-spinners/PuffLoader'

function Beers() {

// Configuración del acceso de navegación e invocación del Hook.
const navigate = useNavigate()

//* Pasos para llamar a la API e interactuar con el contenido
//! 1. Estados
const [allBeers, setAllBeers] = useState(null)

//! 2. Acceder al componentDidMount
useEffect(() => {
    getAllBeers()
})

//! 3. Crear función que llama a API y se comunica con componentDidMount
const getAllBeers = async () => {
    try {
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
        console.log(response.data);
        setAllBeers(response.data)
    }
    catch (error) {
        navigate("/error")
    }
}


//! 4. Spinner de loading

if (allBeers === null) {
    return <PuffLoader color={"#3DC4FC"}/>
}

  return (
    <div>

        <Navbar />

        <h1>Look at out fantastic beer selection!</h1>
        <h4>Do you fancy anything?</h4>

        <form>
            <label htmlFor="searchBeer">Search beer: </label>
            <input type="text" name='searchBeer'  />
        </form>

        {
            allBeers.map( (eachBeer) => {
                return (
                    <div>
                        <div key={eachBeer._id} id='eachBeer'>
                            <img src={eachBeer.image_url} width={50} alt="" />
                            <div id='eachBeerContent'>
                                <h2><Link to={`/beers/${eachBeer._id}`}>{eachBeer.name}</Link></h2>
                                <p><strong>{eachBeer.tagline}</strong></p>
                                <p> <strong>Contributed by: </strong>{eachBeer.contributed_by}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })
        }

    </div>
  )
}

export default Beers