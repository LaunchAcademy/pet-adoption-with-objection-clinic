import PetSerializer from "./PetSerializer.js"

class SpeciesSerializer {
    static async showDetails(species){
        // designate required attributes
        const mustHaveProperties = ["id", "name"]

        // assign those to a serialized object 
        let serializedSpecies = {}
        for(let property of mustHaveProperties){
            serializedSpecies[property] = species[property]
        }

        // get the related pet records
            // serialize those 
        const pets = await species.$relatedQuery("pets")

        const serializedPets = PetSerializer.getSummary(pets)

        serializedSpecies.pets = serializedPets

        // return the serialized data
        return serializedSpecies
    }

}

export default SpeciesSerializer