import express from "express"

import Species from "../../../models/Species.js"

import petSpeciesRouter from "./petSpeciesRouter.js"
import SpeciesSerializer from "../../../serializers/SpeciesSerializer.js"

const speciesRouter = new express.Router()

speciesRouter.use("/:speciesId/pets", petSpeciesRouter)

speciesRouter.get("/", async (req, res) => {
  try {
    const allSpecies = await Species.query()

    const serializedSpeciesArray = SpeciesSerializer.getListOfSpeciesForIndex(allSpecies)
    
    return res.status(200).json({ species: serializedSpeciesArray })
  } catch (err) {
    console.error(err);
    return res.status(500).json({ errors: err })
  }
})

speciesRouter.get("/:id", async (req, res) => {
  try {
    const species = await Species.query().findById(req.params.id)

    const serializedSpecies = await SpeciesSerializer.getSpeciesDataForShow(species)

    return res.status(200).json({ species: serializedSpecies })
  } catch (err) {
    console.error(err)
    return res.status(500),json({ errors: err })
  }
})

export default speciesRouter