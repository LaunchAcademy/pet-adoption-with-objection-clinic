import express from "express"

import Species from "../../../models/Species.js"

import petSpeciesRouter from "./petSpeciesRouter.js"

const speciesRouter = new express.Router()

speciesRouter.use("/:speciesId/pets", petSpeciesRouter)

speciesRouter.get("/", async (req, res) => {
  try {
    const allSpecies = await Species.query()
    return res.status(200).json({ species: allSpecies })
  } catch (err) {
    console.error(err);
    return res.status(500).json({ errors: err })
  }
})

speciesRouter.get("/:id", async (req, res) => {
  const speciesId = req.params.id

  try {
    const theSpecies = await Species.query().findById(speciesId)

    theSpecies.pets = await theSpecies.$relatedQuery("pets")

    console.log(theSpecies)

    return res.status(200).json({ species: theSpecies })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ errors: err })
  }
})

export default speciesRouter