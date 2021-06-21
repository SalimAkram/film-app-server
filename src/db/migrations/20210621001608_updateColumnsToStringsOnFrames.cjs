/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.alterTable("frames", (table) => {
    table.float("aperature").alter()
    table.string("shutterSpeed").alter()
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {}
