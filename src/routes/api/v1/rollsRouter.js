import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Roll } from "../../../models/index.js"
import { User } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

import rollFramesRouter from "./rollFramesRouter.js"
import rollLocationsRouter from "./rollLocationsRouter.js"

const rollsRouter = new express.Router();

rollsRouter.use("/:rollId/frames", rollFramesRouter)
rollsRouter.use("/:rollId/locations", rollLocationsRouter)

rollsRouter.get("/", async (req, res) => {
  try {
    const rolls = await Roll.query().where("userId", 1)
    res.status(200).json({ rolls })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

rollsRouter.get("/:id", async (req, res) => {
  const id =  req.params.id
  try { 
    const roll = await Roll.query().findById(id)
    roll.locations = await roll.$relatedQuery("locations")
    roll.frames = await roll.$relatedQuery("frames")
    res.status(200).json({ roll: roll })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

rollsRouter.post("/", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const userId = req.user.id
  
  try {
    const user = await User.query().findById(userId);
    if (!user) {
      return res.status(400).json({ errors: "user does not exist!"})
    }
    const newRoll = await user.$relatedQuery('rolls').insert(formInput)
    res.status(200).json({ newRoll })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    res.status(500).json({ errors: error });
  }
})

rollsRouter.patch("/:id", async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ["name", "film", "notes", "weather", "loadDate", "unloadDate"]
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update)
  })
  
  if (!isValidOperation) {
    res.status(400).json({ error: "invalid update(s)!"})
  }

  try {
    const roll = await Roll.query().findById(req.params.id)
    if (!roll) {
      return res.status(404).json({ error: "this roll doesnt exist?"})
    }
    updates.forEach((update) => {
      roll[update] = req.body[update]
    })
    res.status(200).json({ roll: roll })
  } catch (error) {
    res.status(500).json({ errors: error })
  }
})

export default rollsRouter