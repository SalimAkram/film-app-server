/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("users", (table) => {
    table.dropColumn("userName");
  });
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {}
