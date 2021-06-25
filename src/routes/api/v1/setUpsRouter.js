import express from "express";
import objection  from "objection";
const  { ValidationError } = objection;

import { SetUp } from "../../../models/index.js";
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
  const updates = Object.keys(req.body)
  const allowedUpdates = ["cameraBrand", "cameraModel", "lenseType", "lenseBrand", "lenseModel", "focalLength", "lenseAperature", "notes", "focusType"]
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update)
  })

  if(!isValidOperation) {
    res.status(400).json({ error: "invalid updates(s)!"})
  }

  try {
    const setUp = await SetUp.query().findById(req.params.id)
    if(!setUp) {
      return res.status(404).json({ error:  "this set up deosnt exist?"})
    }
    updates.forEach((update) => {
      setUp[update] = req.body[update]
    })
    res.status(200).json({ setUp: setUp });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
})


setUpsRouter.delete("/:id", async (req, res) => {
  try {
    const setup = await SetUp.query().deleteById(req.params.id)
    if (!setup) {
      res.status(404).json({ error: "there is nothing to delete?!"})
    }
    res.status(200).json({ deletedSetup: setup });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
})

setUpsRouter.delete("/delete/all", async (req, res) => {
  try {
    const setup = await SetUp.query().delete();
    if (!setup) {
      res.status(404).json({ error: "there is nothing to delete?!" });
    }
    res.status(200).json({ deleteRows: setup });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
});

export default setUpsRouter