/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("setups", (table) =>{
    table.string("notes")
    table.string("focusType")
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("setups", (table) => {
    table.dropColumn("notes")
    table.dropColumn("focusType")
  })
}
