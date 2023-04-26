/* eslint-disable no-console */
import { connection } from "../boot.js"

import SpeciesSeeder from "./seeders/SpeciesSeeder.js";
class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("Seeding Species...");
    await SpeciesSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder