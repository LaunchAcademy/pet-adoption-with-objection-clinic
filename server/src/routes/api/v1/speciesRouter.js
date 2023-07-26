import express from "express"

import Species from "../../../models/Species.js"

import petSpeciesRouter from "./petSpeciesRouter.js"

const speciesRouter = new express.Router()

// speciesRouter.use("/:speciesId/pets", petSpeciesRouter)

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
  try {


    return res.status(200).json({ species: {} })
  } catch (err) {
    console.error(err)
    return res.status(500),json({ errors: err })
  }
})

export default speciesRouter