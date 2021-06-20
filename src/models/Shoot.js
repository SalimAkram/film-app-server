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
    const Frame = require("./Frame")
    const Location = require("./Location")
    const User = require("./User")

    return {
      frames: {
        relation: Model.HasManyRelation,
        modelClass: Frame,
        join: {
          from: "shoots.id",
          to: "frames.shootId"
        }
      },
      locations: {
        relation: Model.HasManyRelation,
        modelClass: Location,
        join: {
          from: "shoots.id",
          to: "locations.shootId"
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "shoots.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = Shoot