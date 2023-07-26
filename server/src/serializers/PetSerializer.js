class PetSerializer {
    static getSummary(arrayOfPets) {
        const requiredAttributes = ["id", "name", "weight", "estimatedAge", "available"]

        const serializedPets = arrayOfPets.map(pet => {
            let serializedPet = {}

            for(let attribute of requiredAttributes) {
                serializedPet[attribute] = pet[attribute]
            }

            return serializedPet
        })

        return serializedPets
    }

}

export default PetSerializer