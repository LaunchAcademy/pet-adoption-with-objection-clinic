import express from "express"

import Species from "../../../models/Species.js"

import SpeciesSerializer from "../../../serializers/SpeciesSerialier.js"

import petSpeciesRouter from "./petSpeciesRouter.js"

const speciesRouter = new express.Router()

speciesRouter.use("/:speciesId/pets", petSpeciesRouter)

speciesRouter.get("/", async (req, res) => {
  try {
    const allSpecies = await Species.query()
    const allSerializedSpecies = SpeciesSerializer.getSummaryForAllSpecies(allSpecies)

    return res.status(200).json({ species: allSerializedSpecies })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ errors: err })
  }
})

speciesRouter.get("/:id", async (req, res) => {
  const speciesId = req.params.id

  try {
    const theSpecies = await Species.query().findById(speciesId)

    const serializedSpecies = await SpeciesSerializer.getDetailsForSpecies(theSpecies)
    // console.log(serializedSpecies)

    // serializedSpecies.pets = await theSpecies.$relatedQuery("pets")

    // console.log(serializedSpecies)
    // console.log(theSpecies)

    return res.status(200).json({ species: serializedSpecies })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ errors: err })
  }
})

export default speciesRouter
