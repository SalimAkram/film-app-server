import express from "express";
import objection  from "objection";
const  { ValidationError } = objection;

import { SetUp } from "../../../models/index.js";
import { User } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js";
import validateCurrentUser from "../../../services/validateCurrentUser.js";

const setUpsRouter = new express.Router();

setUpsRouter.get("/", async (req, res) => {
  try {
    const setUps = await SetUp.query()
    res.status(200).json({ setUps: setUps });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
})

setUpsRouter.get("/:id", async (req, res) => {
  const id = req.params.id

  try {
    const setUp = await SetUp.query().findById(id)
    if (!setUp) {
      return res.status(404).json({ errors: "this setup doesn't exist" })
    } 
    if (!validateCurrentUser(req.user, setUp)) {
      return res.status(403).json({ errors: "you dont have access to this setup" })
    }
    res.status(200).json({ setUp: setUp });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
})

setUpsRouter.post("/", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const userId = req.user.id

  try {
    const user = await User.query().findById(userId)
    if (!user) {
      return res.status(400).json({ errors: "user does not exist!" });
    }
    const newSetUp = await user.$relatedQuery('setups').insert(formInput)
    return res.status(201).json({ newSetUp, message: "new setup added!" });
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(422).json({ errors: error.data })
    }
    res.status(500).json({ errors: error });
  }
})

setUpsRouter.patch("/:id", async (req, res) => {
  const updates = Object.keys(req.body)
  const id = req.params.id

  try {
    const setUp = await SetUp.query().findById(id)
    if(!setUp) {
      return res.status(404).json({ error:  "this set up doesn't exist?"})
    }
    const newSetUp = updates.forEach((update) => {
      setUp[update] = req.body[update]
    })
    const updatedSetUp =  await setUp.$query().patchAndFetch(newSetUp)
    res.status(200).json({ updatedSetUp: updatedSetUp });
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