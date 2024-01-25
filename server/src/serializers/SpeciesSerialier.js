class SpeciesSerializer {
  static getSummaryForAllSpecies(speciesArray) {
    const serializedSpeciesArray = speciesArray.map((species) => {
      const allowedAttributes = ["id", "name"]
      let serializedSpeciesObject = {}
      for (const attribute of allowedAttributes) {
        serializedSpeciesObject[attribute] = species[attribute]
      }

      return serializedSpeciesObject
      // const serializedSpeciesObject = SpeciesSerializer.getDetailsForSpecies(species)
      // return serializedSpeciesObject
    })

    return serializedSpeciesArray
  }

  static async getDetailsForSpecies(speciesObject) {
    console.log(speciesObject)
    const allowedAttributes = ["id", "name"]
    let serializedSpeciesObject = {}

    for (const attribute of allowedAttributes) {
      serializedSpeciesObject[attribute] = speciesObject[attribute]
    }

    // query associated pets
    serializedSpeciesObject.pets = await speciesObject.$relatedQuery("pets")

    return serializedSpeciesObject
  }
}

export default SpeciesSerializer
