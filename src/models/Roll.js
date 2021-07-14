const Model = require("./Model");
const uniqueFactory = require("objection-unique");

const unique = uniqueFactory({
  fields: ["rollName"],
  identifiers: ["id"]
})

class Roll extends unique(Model) {
  static get tableName() {
    return "rolls"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["rollName"],
      properties: {
        rollName: { type: "string" },
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
          from: "rolls.id",
          to: "frames.rollId"
        }
      },
      locations: {
        relation: Model.HasManyRelation,
        modelClass: Location,
        join: {
          from: "rolls.id",
          to: "locations.rollId"
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "rolls.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = Roll