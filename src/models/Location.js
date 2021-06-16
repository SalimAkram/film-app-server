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
    return {

    }
  }
}

module.exports = Location