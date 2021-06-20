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
        lenseType: { type: "string" },
        lenseBrand: { type: "string" },
        lenseModel: { type: "string" },
        focalLength: {type: "string" },
        lenseAperature: { type: "string" }
      }
    }
  }
  
  static get relationMappings() {
    const User = require("./User");

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "setups.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = SetUp