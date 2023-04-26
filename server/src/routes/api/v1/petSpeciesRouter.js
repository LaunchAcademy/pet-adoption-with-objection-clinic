import express from "express"

import Species from "../../../models/Species.js"
import Pet from "../../../models/Pet.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const petSpeciesRouter = new express.Router({ mergeParams: true })

petSpeciesRouter.post("/", async (req, res) => {
  try {
    console.log("I'M HERE!!!!")
    console.log(req.body)
    console.log(req.params)

    const formBody = req.body
    const cleanedBody = cleanUserInput(formBody)

    const speciesId = req.params.speciesId
    // const speciesToAssociateWith = await Species.query().findById(speciesId)

    const petData = {
      ...cleanedBody,
      speciesId: speciesId
    }
    console.log(petData)
    const newPet = await Pet.query().insertAndFetch(petData)
    return res.status(201).json({ pet: newPet })
  } catch (err) {
    console.log(err)
    //model validation error handling
    return res.status(500).json({ errors: err.message })
  }
})

export default petSpeciesRouter

