/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("films", (table) => {
    table.bigIncrements("id")
    table.string("brand").notNullable()
    table.string("name").notNullable().unique
    table.integer("iso").notNullable()
    table.integer("exposureAmount")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("films")
}
