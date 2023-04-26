import express from "express"

import Species from "../../../models/Species.js"

const speciesRouter = new express.Router()

speciesRouter.get("/", async (req, res) => {
  try {
    const allSpecies = await Species.query()
    return res.status(200).json({ species: allSpecies })
  } catch (err) {
    console.error(err);
    return res.status(500).json({ errors: err })
  }
})

export default speciesRouter