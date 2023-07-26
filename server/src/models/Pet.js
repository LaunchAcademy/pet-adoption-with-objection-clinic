const Model = require("./Model")

class Pet extends Model {
  static get tableName() {
    return "pets"
  }

  // note the foreign key not being required
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "available"],
      properties: {
        name: { type: "string "},
        available: { type: ["boolean", "string"]}
      }
    }
  }

  static get relationMappings() {
    const Species = require("./Species")

    return {
      species: {
        relation: Model.BelongsToOneRelation,
        modelClass: Species,
        join: {
          from: "pets.speciesId",
          to: "species.id"
        }
      }
    }
  }
}

module.exports = Pet