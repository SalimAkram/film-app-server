/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("frames", (table) => {
    table.bigIncrements("id");
    table.integer("aperature");
    table.integer("shutterSpeed");
    table.integer("frameNumber");
    table.date("date");
    table
      .bigInteger("rollId")
      .unsigned()
      .notNullable()
      .index()
      .references("rolls.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("frames")
}
