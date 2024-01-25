class PetSerializer {
  static getDetailsForPet(petObject) {
    // console.log(petObject)
    const allowedAttributes = ["id", "name", "available", "weight", "estimatedAge", "speciesId"]
    let serializedPet = {}

    for (const attribute of allowedAttributes) {
      // serializedPet.id = 1
      // console.log("pet object attribute value", petObject[attribute])

      serializedPet[attribute] = petObject[attribute]
      // console.log("current serialized pet", serializedPet)
    }
    // console.log("final", serializedPet)

    return serializedPet
  }
}

export default PetSerializer
