import express from "express"
import objection  from "objection";
const  { ValidationError } = objection

import { SetUp } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js";

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
  const { body } = req
  const formInput = cleanUserInput(body)
  
  try {
    const newSetUp = await SetUp.query().insertAndFetch(formInput)
    return res.status(201).json({ newSetUp });
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(422).json({ errors: error.data })
    }
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