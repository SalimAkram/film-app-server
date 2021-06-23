const Model = require("./Model");

class Location extends Model {
  static get tableName() {
    return "locations"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["longitude", "latitude"],
      properties: {
        longitude: { type: ["integer", "string"] },
        latitude: { type: ["integer", "string"] },
      }
    }
  }

  static get relationMappings() {
    const Roll = require("./Roll");

    return {
      roll: {
        relation: Model.BelongsToOneRelation,
        modelClass: Roll,
        join: {
          from: "locations.rollId",
          to: "rolls.id",
        },
      },
    };
  }
}

module.exports = Location