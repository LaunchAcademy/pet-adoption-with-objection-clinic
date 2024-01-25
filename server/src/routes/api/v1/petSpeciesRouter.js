import express from "express"

import Species from "../../../models/Species.js"
import Pet from "../../../models/Pet.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
import { ValidationError } from "objection"
import PetSerializer from "../../../serializers/PetSerializer.js"

const petSpeciesRouter = new express.Router({ mergeParams: true })

petSpeciesRouter.post("/", async (req, res) => {
  const newPetData = cleanUserInput(req.body)
  const speciesId = req.params.speciesId

  // newPetData.speciesId = speciesId
  try {
    const combinedData = { ...newPetData, speciesId }
    console.log(combinedData)

    const pet = await Pet.query().insertAndFetch(combinedData)
    // const species = await Species.query().findById(speciesId)
    // const newPet = await species.$relatedQuery("pets").insert(newPetData)

    const serializedPet = PetSerializer.getDetailsForPet(pet)

    return res.status(201).json({ pet: serializedPet })
  } catch (err) {
    // console.log(err)

    if (err instanceof ValidationError) {
      return res.status(422).json({ errors: err.data })
    }
    return res.status(500).json({ errors: err.message })
  }
})

export default petSpeciesRouter
