/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("setups", (table) => {
    table.bigIncrements("id");
    table.string("cameraBrand").notNullable();
    table.string("cameraModel").notNullable();
    table.string("lenseBrand");
    table.string("lenseModel");
    table.string("lenseAperature");
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("setups");
}
