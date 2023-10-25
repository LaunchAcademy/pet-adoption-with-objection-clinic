import React, { useState, useEffect } from "react"

import NewPetForm from "./NewPetForm"
import PetTile from "./PetTile"
import ErrorList from "./ErrorList"
import translateServerErrors from "../services/translateServerErrors"

const SpeciesShow = (props) => {
  const [species, setSpecies] = useState({
    name: "",
    pets: []
  })
  const [errors, setErrors] = useState([])

  const speciesId = props.match.params.id

  const getSpecies = async () => {
    try {
      const response = await fetch(`/api/v1/species/${speciesId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      setSpecies(body.species)
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getSpecies()
  }, [])

  const postPet = async (newPetData) => {
    try {
      const response = await fetch(`/api/v1/species/${speciesId}/pets`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newPetData)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const errorBody = await response.json()
          const newErrors = translateServerErrors(errorBody.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      } else {
        // handle successful post
   
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const petTiles = species.pets.map((petObject) => {
    return <PetTile key={petObject.id} {...petObject} />
  })

  return (
    <div>
      <h1>{species.name}</h1>
        <NewPetForm postPet={postPet} />
      <h4>Pets:</h4>
      {petTiles}
      <ErrorList errors={errors} />
    </div>
  )
}

export default SpeciesShow
