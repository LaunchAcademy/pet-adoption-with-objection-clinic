import express from "express"

import Species from "../../../models/Species.js"
import Pet from "../../../models/Pet.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const petSpeciesRouter = new express.Router({ mergeParams: true })

petSpeciesRouter.post("/", async (req, res) => {
  try {

    return res.status(201).json({ pet: {} })
  } catch (err) {
    console.log(err)
    //model validation error handling
    return res.status(500).json({ errors: err.message })
  }
})

export default petSpeciesRouter

