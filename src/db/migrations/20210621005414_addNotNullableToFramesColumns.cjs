/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {return knex.schema.alterTable("frames", (table) => {
  table.float("aperature").notNullable().alter();
  table.string("shutterSpeed").notNullable().alter();
});}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {}
