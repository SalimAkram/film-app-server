/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.alterTable("locations", (table) => {
    table.string("longitude").notNullable().alter();
    table.string("latitude").notNullable().alter();
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {}
