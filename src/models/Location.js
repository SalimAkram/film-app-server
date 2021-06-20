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
    const Shoot = require("./Shoot");

    return {
      shoot: {
        relation: Model.BelongsToOneRelation,
        modelClass: Shoot,
        join: {
          from: "locations.shootId",
          to: "shoots.id",
        },
      },
    };
  }
}

module.exports = Location