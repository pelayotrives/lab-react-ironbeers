import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from 'axios'
import PuffLoader from "react-spinners/PuffLoader"
import Navbar from "../components/Navbar"

function SingleBeer() {

    //! 1. Estados
    const [singleBeer, setSingleBeer] = useState(null)

    //* Desestructuramos con useParams para poder coger el id del apartamento que está en el URL.
    //* Se llama id porque así es como lo hemos definido en las rutas de App.js.

    const navigate = useNavigate()
    const { id } = useParams()

    //! 2. Acceder al componentDidMount
    useEffect(() => {
        getSingleBeer()
    }, [])

    //! 3. Crear función que llama a API y se comunica con componentDidMount
    const getSingleBeer = async () => {
        try {
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            console.log(response.data);
            setSingleBeer(response.data)
        }
        catch (error) {
            navigate("/error")
        }   
    }

    //! 4. Spinner de loading
    if (singleBeer === null) {
        return <PuffLoader color={"#3DC4FC"}/>
    }

  return (

    <div>
        <Navbar/>

            {
                <div id="singleBeerBlock">
                    <br /><br />
                    <img width={80} src={singleBeer.image_url} alt="Fresh Beer" />
                    <br />
                    <h1>{singleBeer.name}</h1>
                    <h3>{singleBeer.tagline}</h3>
                    <p><strong>First brewed: </strong>{singleBeer.first_brewed}</p>
                    <p><strong>Attenuation level: </strong>{singleBeer.attenuation_level}</p>
                    <p>{singleBeer.description}</p>
                    <p><strong>Contributed by: </strong>{singleBeer.contributed_by}</p>
                </div>
            }
        

    </div>

  )

}

export default SingleBeer