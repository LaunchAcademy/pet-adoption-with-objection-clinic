import { Species}  from "../../models/index.js"
import { Pet } from "../../models/index.js"

class PetSeeder {
  static async seed() {
    const catSpecies = await Species.query().findOne({ name: "Cat" })
    const rabbitSpecies = await Species.query().findOne({ name: "Rabbit" })
    
    await Pet.query().insertAndFetch({ name: "Toews", available: true, speciesId: catSpecies.id })
    await Pet.query().insertAndFetch({ name: "Orange Kitty 2nd", available: true, speciesId: catSpecies.id })

    await Pet.query().insertAndFetch({ name: "Bunnicula", available: true, speciesId: rabbitSpecies.id })
    await Pet.query().insertAndFetch({ name: "Peter", available: true, speciesId: rabbitSpecies.id })
  }
}

export default PetSeeder