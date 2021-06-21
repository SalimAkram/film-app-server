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
        notes: {type: "string" }
      }
    }
  }

  static get relationMappings() {
    const Shoot = require("./Shoot")

    return {
      shoot: {
        relation: Model.BelongsToOneRelation,
        modelClass: Shoot,
        join: {
          from: "frames.shootId",
          to: "shoots.id"
        }
      }
    }
  }
}

module.exports = Frame 