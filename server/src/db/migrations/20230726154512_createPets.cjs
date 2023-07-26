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
        table.boolean("available").notNullable().defaultTo(true)
        table.integer("weight")
        table.integer("estimatedAge")
        table.bigInteger("speciesId").notNullable().unsigned().index().references("species.id")
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

// Create a migration for "pets".
// Each pet should have a required name(string), required "available" status(boolean), optional weight(integer), optional estimated age(integer), and speciesId to connect it to its associated species.

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
    return knex.schema.dropTableIfExists("pets")
}
