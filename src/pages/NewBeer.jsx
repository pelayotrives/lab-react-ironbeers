import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function NewBeer() {

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedby, setContributedby] = useState("");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleTaglineChange = (event) => {
    console.log(event.target.value);
    setTagline(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  };

  const handleFirstBrewedChange = (event) => {
    console.log(event.target.value);
    setFirstBrewed(event.target.value);
  };

  const handleBrewersTipsChange = (event) => {
    console.log(event.target.value);
    setBrewersTips(event.target.value);
  };

  const handleAttenuationLevelChange = (event) => {
    console.log(event.target.value);
    setAttenuationLevel(event.target.value);
  };

  const handleContributedByChange = (event) => {
    console.log(event.target.value);
    setContributedby(event.target.value);
  };

  const handleSubmit = async (event) => {

      event.preventDefault()

        try {

            const newBeer = {
                name,
                tagline,
                description,
                first_brewed: firstBrewed,
                brewers_tips: brewersTips,
                attenuation_level: attenuationLevel,
                contributed_by: contributedby
            }

            const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            navigate("/beers")

        }

        catch (err) {
            navigate("/error")
        }

  }

  return (
    <div>

      <Navbar />

      <h1>Here you add a brand new beer!</h1>
      <h4>That's right!</h4>
      <br />

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={name} onChange={handleNameChange}/>

        <br />
        <br />

        <label htmlFor="tagline">Tagline: </label>
        <input type="text" name="tagline" value={tagline} onChange={handleTaglineChange} />

        <br />
        <br />

        <label htmlFor="description">Description: </label>
        <input type="text" name="description" value={description} onChange={handleDescriptionChange} />

        <br />
        <br />

        <label htmlFor="first_brewed">First Brewed: </label>
        <input type="text" name="first_brewed" value={firstBrewed} onChange={handleFirstBrewedChange} />

        <br />
        <br />

        <label htmlFor="brewers_tips">Brewers Tips: </label>
        <input type="text" name="brewers_tips" value={brewersTips} onChange={handleBrewersTipsChange} />

        <br />
        <br />

        <label htmlFor="attenuation_level">Attenuation level: </label>
        <input type="number" name="attenuation_level" value={attenuationLevel} onChange={handleAttenuationLevelChange} />

        <br />
        <br />

        <label htmlFor="contributed_by">Contributed by: </label>
        <input type="text" name="contributed_by" value={contributedby} onChange={handleContributedByChange} />

        <br />
        <br />

        <button>Add new beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
