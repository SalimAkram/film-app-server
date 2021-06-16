// include all of your models here using CommonJS requires
const User = require("./User.js");
const Shoot = require("./Shoot.js");
const Film = require("./Film.js");
const SetUp = require("./SetUp.js");
const Frame = require("./Frame.js");
const Location = require("./Location.js");

module.exports = { 
  User, Shoot, Film, SetUp, Frame, Location
};  