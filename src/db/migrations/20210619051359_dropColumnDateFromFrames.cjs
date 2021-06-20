/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("frames", (table) =>{
    table.dropColumn("date")
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {}
