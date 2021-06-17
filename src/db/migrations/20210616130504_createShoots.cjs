/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("shoots", (table) => {
    table.bigIncrements("id");
    table.string("name").notNullable().unique();
    table.string("film");
    table.string("cameraSetup");
    table.string("weather");
    table.string("notes");
    table.integer("cameraIso");
    table.date("loadDate");
    table.date("unloadDate");
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("shoots")
}
