import express from "express"
import { SetUp } from "../../../models/index.js"

const setUpsRouter = new express.Router();

setUpsRouter.get("/", async (req, res) => {
  try {
    const setUps = await SetUp.query()
    res.status(200).json({ setUps: setUps });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
})

setUpsRouter.post("/", async (req, res) => {
  try {
    res.status(201).json({ setup: "this will be the setup the user added to the data base" });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
})

setUpsRouter.patch("/:id", async (req, res) => {
  try {
    res.status(200).json({ setup: "this will be the setup that is updated" });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
})

setUpsRouter.delete("/:id", async (req, res) => {
  try {
    res.status(200).json({ setup: "this will be the setup that is deleted" });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
})

export default setUpsRouter