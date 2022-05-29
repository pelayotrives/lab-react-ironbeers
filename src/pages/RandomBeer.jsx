import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import PuffLoader from "react-spinners/PuffLoader"
import Navbar from "../components/Navbar"

function RandomBeer() {

    //! 1. Estados
    const [randomBeer, setRandomBeer] = useState(null)

    //* Desestructuramos con useParams para poder coger el id del apartamento que está en el URL.
    //* Se llama id porque así es como lo hemos definido en las rutas de App.js.

    //! 2. Acceder al componentDidMount
    useEffect(() => {
        getRandomBeer()
    }, [])

    //! 3. Crear función que llama a API y se comunica con componentDidMount
    const getRandomBeer = async () => {
        let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        console.log(response.data);
        setRandomBeer(response.data)
    }

    //! 4. Spinner de loading
    if (randomBeer === null) {
        return <PuffLoader color={"#3DC4FC"}/>
    }

  return (

    <div>
        <Navbar/>

            {
                <div id="singleBeerBlock">
                    <br /><br />
                    <img width={80} src={randomBeer.image_url} alt="Fresh Beer" />
                    <br />
                    <h1>{randomBeer.name}</h1>
                    <h3>{randomBeer.tagline}</h3>
                    <p><strong>First brewed: </strong>{randomBeer.first_brewed}</p>
                    <p><strong>Attenuation level: </strong>{randomBeer.attenuation_level}</p>
                    <p>{randomBeer.description}</p>
                    <p><strong>Contributed by: </strong>{randomBeer.contributed_by}</p>
                </div>
            }
        

    </div>

  )

}

export default RandomBeer