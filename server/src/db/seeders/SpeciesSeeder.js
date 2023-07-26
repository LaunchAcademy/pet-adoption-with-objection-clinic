import Species from "../../models/Species.js"

class SpeciesSeeder {
  static async seed() {
    const speciesData = [
      { name: "Cat" },
      { name: "Dog" },
      { name: "Rabbit" },
      { name: "Rat" },
      { name: "Snek" },
    ]

    for (const speciesInfo of speciesData) {
      if (!await Species.query().findOne({ name: speciesInfo.name })) {
        await Species.query().insert(speciesData)
      }
    }
    const numSpecies = await Species.query().count()
    console.log(numSpecies);
    console.log(`${numSpecies[0].count} number of Species added to the database`);
  }
}

export default SpeciesSeeder