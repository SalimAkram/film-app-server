const Model = require("./Model");
const uniqueFactory = require("objection-unique")

const unique  = uniqueFactory({
  fields: ["frameNumber"],
  identifiers: ["id"]
})

class Frame extends unique(Model) {
  static get tableName() {
    return "frames"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [],
      properties: {
        aperature: { type: ["integer", "string"] },
        shutterSpeed: { type: ["integer", "string"] },
        frameNumber: { type: ["integer", "string"] },
        date: { type: ["integer", "string"] }
      }
    }
  }

  static get relationMappings(){
    return {

    }
  }
}

module.exports = Frame 