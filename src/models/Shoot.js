const Model = require("./Model");
const uniqueFactory = require("objection-unique");

const unique = uniqueFactory({
  fields: ["name"],
  identifiers: ["id"]
})

class Shoot extends unique(Model) {
  static get tableName() {
    return "shoots"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
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