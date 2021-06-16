const Model = require("./Model");

class Shoot extends Model {
  static get tableName() {
    return "shoots"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "film", "loadDate", "unloadDate"],
      properties: {
        name: { type: "string" },
        film: { type: "string" },
        cameraSetup: { type: "string" },
        weather: { type: "string" },
        notes: { type: "string" },
        cameraIso: { type: ["string", "integer"] },
        loadDate: { type: "date" },
        unloadDate: { type: "date" }
      }
    }
  }

  static get relationMappings() {
    return {
      
    }
  }
}

module.exports = Shoot