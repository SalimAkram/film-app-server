const Model = require("./Model");
const uniqueFactory = require("objection-unique");

const unique = uniqueFactory({
  fields: ["name"],
  identifiers: ["id"]
})

class Film extends unique(Model) {
  static get tableName() {  
    return "films"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["brand", "name", "iso"],
      properties: {
        brand: { type: "string" },
        name: { type: "string "},
        iso: { type: ["integer", "string"] },
        exposureAmount: { type: ["integer", "string"] }
      }
    }
  }

  static get relationMappings() {
    return {

    }
  }
}

module.exports = Film