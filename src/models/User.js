/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model");


const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email"],
  identifiers: ["id"],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "userName"],

      properties: {
        email: { type: "string" },
        cryptedPassword: { type: "string" },
        userName: { type: "string" },
      },
    };
  }

  static get relationMappings() {
    const SetUp = require("./SetUp");
    const Shoot = require("./Shoot");

    return {
      setups: {
        relation: Model.HasManyRelation,
        modelClass: SetUp,
        join: {
          from: "users.id",
          to: "setups.userId",
        },
      },
      shoots: {
        relation: Model.HasManyRelation,
        modelClass: Shoot,
        join: {
          from: "users.id",
          to: "shoots.userId",
        },
      },
    };
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }
}

module.exports = User;
