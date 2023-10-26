import express from "express"

import Species from "../../../models/Species.js"
import Pet from "../../../models/Pet.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
import PetSerializer from "../../../serializers/PetSerializer.js"

const petSpeciesRouter = new express.Router({ mergeParams: true })

petSpeciesRouter.post("/", async (req, res) => {

  const cleanedPet = cleanUserInput(req.body)

  cleanedPet.speciesId = req.params.speciesId

  try {
    const pet = await Pet.query().insert(cleanedPet)

    const serializedPet = PetSerializer.getPetForNewPetPost(pet)

    return res.status(201).json({ pet: serializedPet })
  } catch (err) {
    console.log(err)
    //model validation error handling
    return res.status(500).json({ errors: err.message })
  }
})

export default petSpeciesRouter

