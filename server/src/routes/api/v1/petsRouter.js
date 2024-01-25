import express from "express"

import Pet from "../../../models/Pet.js"

import PetSerializer from "../../../serializers/PetSerializer.js"

const petsRouter = new express.Router()

petsRouter.get("/:id", async (req, res) => {
  try {
    const petId = req.params.id
    const foundPet = await Pet.query().findById(petId).throwIfNotFound()
    // console.log(foundPet)

    const serializedPet = PetSerializer.getDetailsForPet(foundPet)

    return res.status(200).json({ pet: serializedPet })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

export default petsRouter
