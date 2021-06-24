/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("frames", (table) => {
    table.json("location")
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("frames", (table) => {
    table.dropColumn("location")
  })
}
