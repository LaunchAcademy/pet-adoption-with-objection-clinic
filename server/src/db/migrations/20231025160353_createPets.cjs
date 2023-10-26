/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("pets", (table) => {
        table.bigIncrements("id")
        table.string("name").notNullable()
        table.boolean("available").defaultTo(true).notNullable()
        table.integer("weight")
        table.integer("estimatedAge")
        table.bigInteger("speciesId").notNullable().references("species.id").unsigned().index()
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

// await Pet.query().insert({ name: "Cooper" })

// const dog = { id: 3, name: "Cooper", available: true, weight: null, estimatedAge: null}

// if (!dog.available) {
//   dont show the dog 
// }

// Create a migration for "pets".
// Each pet should have a required name(string), required "available" status(boolean), optional weight(integer), optional estimated age(integer), and speciesId to connect it to its associated species.

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
    return knex.schema.dropTableIfExists("pets")
}
