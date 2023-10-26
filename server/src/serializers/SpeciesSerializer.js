import PetSerializer from "./PetSerializer.js"

class SpeciesSerializer {
  static getListOfSpeciesForIndex(speciesArray) {
    const allowedProperties = ["id", "name"]

    const serializedSpeciesArray = speciesArray.map((speciesObject) => {
      const serializedSpeciesObject = {}

      for(let property of allowedProperties) {
        serializedSpeciesObject[property] = speciesObject[property]
      }

      return serializedSpeciesObject
    })

    return serializedSpeciesArray
  }

  static async getSpeciesDataForShow(speciesObject) {

    const allowedAttributes = ["id", "name"]

    const serializedSpecies = {}
    for(let attribute of allowedAttributes) {
      serializedSpecies[attribute] = speciesObject[attribute]
    }

    const pets = await speciesObject.$relatedQuery("pets")

    serializedSpecies.pets = PetSerializer.getPetsForSpeciesShow(pets)

    return serializedSpecies
  }
}

export default SpeciesSerializer