class PetSerializer {
  static getPetsForSpeciesShow(pets) {
    const allowedAttributes = ["id", "name", "weight", "available", "estimatedAge"]

    const serializedPets = pets.map((petObject) => {
      const serializedPet = {}
      for (let attribute of allowedAttributes) {
        serializedPet[attribute] = petObject[attribute]
      }
      return serializedPet
    })

    return serializedPets
  }

  static getPetForNewPetPost(pet) {
    const allowedAttributes = ["id", "name", "weight", "available", "estimatedAge"]

    const serializedPet = {}
    for (let attribute of allowedAttributes) {
      serializedPet[attribute] = petObject[attribute]
    }

    return serializedSpeciesArray
  }
}

export default PetSerializer