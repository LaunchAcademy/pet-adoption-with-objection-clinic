const Model = require("./Model")

class Species extends Model {
  static get tableName() {
    return "species"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" }
      }
    }
  }
}

module.exports = Species