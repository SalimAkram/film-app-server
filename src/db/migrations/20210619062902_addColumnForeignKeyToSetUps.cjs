/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("setups", (table) => {
    table
      .bigInteger("userId")
      .unsigned()
      .notNullable()
      .index()
      .references("users.id")
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {}
