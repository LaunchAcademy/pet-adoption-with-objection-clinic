import Species from "../../models/Species.js"

class PetSeeder {
  static async seed() {
    const catSpecies = await Species.query().findOne({ name: "cat" })
    
    await Pet.query().insertAndFetch({ name: "Toews", available: false, speciesId: catSpecies.id })
  }
}

export default PetSeeder