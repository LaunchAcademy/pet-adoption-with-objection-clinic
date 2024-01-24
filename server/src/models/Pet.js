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
        available: { type: ["boolean", "string"]},
        estimatedAge: { type: ["integer", "string"]},
        weight: { type: ["integer", "string"]}
      }
    }
  }

  static get relationMappings() {
    // const Species = require("./Species")

    // return {}
  }
}

module.exports = Pet