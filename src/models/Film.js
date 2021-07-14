const Model = require("./Model");
const uniqueFactory = require("objection-unique");

const unique = uniqueFactory({
  fields: ["filmName"],
  identifiers: ["id"]
})

class Film extends unique(Model) {
  static get tableName() {  
    return "films"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["brand", "filmName", "iso", "format"],
      properties: {
        brand: { type: "string" },
        filmName: { type: "string "},
        iso: { type: ["integer", "string"] },
        format: { type: ["string"] }
      }
    }
  }
}

module.exports = Film