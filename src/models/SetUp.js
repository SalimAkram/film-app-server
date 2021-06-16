const Model = require("./Model");

class SetUp extends Model {
  static get tableName() {
    return "setups"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["cameraBrand", "cameraModel"],
      properties: {
        cameraBrand: { type: "string" },
        cameraModel: { type: "string" },
        lenseBrand: { type: "string" },
        lenseModel: { type: "string" },
        lenseAperature: { type: "string" }
      }
    }
  }
  
  static get relationMappings() {
    return {
      
    }
  }
}

module.exports = SetUp